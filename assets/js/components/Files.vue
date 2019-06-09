<template>
    <div class="card">
        <div class="card-header">
            SDS Binder
            <a href="/file/create" class="btn btn-info float-right"><span class="fa fa-upload text-white"></span> Upload SDS</a>
        </div>
        <div class="card-body">
            <div v-if="!files.length" class="text-center pb-4 pt-4">
                You dont have existing records upload one
            </div>
            <table class="table table-striped" v-if="files.length">
                <thead>
                <tr class="table-active">
                    <td>Product Name</td>
                    <td>Item # / SDS #</td>
                    <td>Manufacturer</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="file in files">
                    <td>{{file.title}}</td>
                    <td>{{file.itemId}}</td>
                    <td>{{file.manufacturer}}</td>
                    <td>
                        <a :href="`/files/${file.id}/pdf`" target="_blank" class="fa fa-download"></a>
                        <span v-on:click="deleteFile(file)" class="fa fa-close"></span>
                        <a :href="'/files/'+file.id+'/edit'" class="fa fa-edit"></a>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="text-center" v-if="this.pages > 1">
                <paginate
                        :page-count="pages"
                        :click-handler="search"
                        :prev-text="'Prev'"
                        :next-text="'Next'"
                        :prev-class="'page-item'"
                        :prev-link-class="'page-link'"
                        :next-class="'page-item'"
                        :next-link-class="'page-link'"
                        :page-link-class="'page-link'"
                        :page-class="'page-item'"
                        :container-class="'pagination justify-content-center'">
                </paginate>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Files",
        data: () => {
            return {
                files: [],
                saving: false,
                pages: 1,
                page: 1
            }
        },
        methods: {
            search(page) {
                this.page = page;
                window.axios.get('/api/files?page=' + this.page).then(
                    (res) => {
                        this.files = res.data.items;
                        this.pages = res.data.pages;
                    }
                );
            },
            deleteFile(file) {
                this.$swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            window.axios.delete('/api/files/' + file.id).then(
                                (res) => {
                                    this.$swal("File deleted!", "Your file has been deleted!", "success");
                                    this.search(this.page);
                                }
                            );
                        }
                    });


            }
        },
        mounted() {
            this.search(1);
        }

    }
</script>

<style scoped lang="scss">
    @import "../../css/colors";

    .card-body{
        padding: 0;
    }
    .fa {
        margin-right: 10px;
        color: $blue;
        cursor: pointer;
    }

    .fa:hover {
        color: darken($blue, 50);
    }
</style>