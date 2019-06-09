<?php

namespace App\Controller;

use App\Entity\File;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class FileController extends AbstractController
{

    const ITEMS_PER_PAGE = 5;

    /**
     * @Route("/file", name="file")
     */
    public function index()
    {
        return $this->render('file/index.html.twig');
    }

    /**
     * @Route("/file/create", name="file.create")
     */
    public function create()
    {
        return $this->render('file/create.html.twig', ['file' => json_encode([
            'title'=>'',
            'manufacturer'=>''
        ])]);
    }

    /**
     * @Route("/files/{id}/edit", name="file.edit")
     */
    public function edit($id)
    {
        $entity = $this->getDoctrine()->getManager()->getRepository(File::class)->findOneBy(['id' => $id]);

        $json = json_encode([
            'id' => $entity->getId(),
            'title' => $entity->getTitle(),
            'manufacturer' => $entity->getManufacturer(),
            'path' => $entity->getPath(),
            'itemId' => $entity->getItemId(),

        ]);

        return $this->render('file/create.html.twig', ['file' => $json]);
    }


    /**
     * @Route("/api/files", name="file.store.post", methods={"POST"})
     */
    public function store(): Response
    {
        $request = Request::createFromGlobals();

        $entityManager = $this->getDoctrine()->getManager();

        $file = $request->files->get('file');

        $fileRecord = new File();
        $fileRecord->setTitle($request->get('title'));
        $fileRecord->setItemId($request->get('itemId'));
        $fileRecord->setManufacturer($request->get('manufacturer'));
        $fileRecord->setPath('empty');

        $entityManager->persist($fileRecord);

        $entityManager->flush();

        $path = $this->handleUploadedFile($file, $fileRecord->getId());

        $fileRecord->setPath($path);

        $entityManager->persist($fileRecord);
        $entityManager->flush();

        return new Response('Saved new file with id ' . $fileRecord->getId());

    }

    /**
     * @Route("/api/files", name="file.store", methods={"GET"})
     */
    public function list(): Response
    {
        $request = Request::createFromGlobals();
        $page = $request->get('page');

        $records = $this->getDoctrine()->getRepository(File::class)->getAllFiles($page, self::ITEMS_PER_PAGE);


        $totalItems = $records['paginator']->count();

        return new Response(json_encode([
            'items' => $this->transformFileCollection($records['paginator']->getIterator()),
            'totalItems' => $totalItems,
            'pages' => $totalItems / self::ITEMS_PER_PAGE
        ]), 200, ['content-type' => 'application/json']);
    }

    /**
     * @Route("/api/files/{id}", name="file.destroy", methods={"DELETE"})
     */
    public function destroy($id): Response
    {
        $entity = $this->getDoctrine()->getManager()->getRepository(File::class)->findOneBy(['id' => $id]);

        if ($entity != null) {
            $this->getDoctrine()->getManager()->remove($entity);
            $this->getDoctrine()->getManager()->flush();
        }
        return new Response('File deleted');

    }

    /**
     * @Route("/api/files/{id}", name="file.update", methods={"POST"})
     */
    public function update($id): Response
    {
        $request = Request::createFromGlobals();

        $entity = $this->getDoctrine()->getManager()->getRepository(File::class)->findOneBy(['id' => $id]);

        $file = $request->files->get('file');

        $entity->setTitle($request->get('title'));
        $entity->setItemId($request->get('itemId'));
        $entity->setManufacturer($request->get('manufacturer'));

        if($file) $this->handleUploadedFile($file, $entity->getId());

        $this->getDoctrine()->getManager()->persist($entity);

        $this->getDoctrine()->getManager()->flush();

        return new Response('File updated');

    }

    /**
     * @Route("/files/{id}/pdf", name="file.pdf", methods={"GET"})
     */
    public function pdf($id)
    {
        $entity = $this->getDoctrine()->getManager()->getRepository(File::class)->findOneBy(['id' => $id]);

        $publicResourcesFolderPath = dirname(__DIR__, 2) . '/public/' . $entity->getPath();


        return new BinaryFileResponse($publicResourcesFolderPath);
    }

    private function handleUploadedFile(UploadedFile $file, $id)
    {
        $file->move('uploads', "{$id}.pdf");

        return "uploads/{$id}.pdf";
    }

    private function transformFileCollection($records)
    {
        return array_map(function (File $record) {
            return [
                'id' => $record->getId(),
                'title' => $record->getTitle(),
                'manufacturer' => $record->getManufacturer(),
                'path' => $record->getPath(),
                'itemId' => $record->getItemId(),

            ];
        }, iterator_to_array($records));
    }
}
