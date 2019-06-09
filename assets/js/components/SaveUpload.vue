<template>
    <div class="card">
        <div class="card-header">
            {{ file.id ? `Editing SDS with ID ${file.id}`: "Upload SDS"}}
        </div>
        <div class="card-body">
            <form class="form-inline" v-on:submit.prevent>

                <div class="form-group col-sm-12 col-md-6">
                    <label for="title" class="mr-2">Title</label>
                    <input type="text" name="title"
                           id="title" class="form-control" v-model="file.title" required>
                </div>

                <div class="form-group col-sm-12 col-md-6">
                    <label for="manufacturer" class="mr-2">Manufacturer</label>
                    <input type="text" name="manufacturer" id="manufacturer" class="form-control"
                           required
                           v-model="file.manufacturer">
                </div>


                <div class="form-group col-md-6 file-input">
                    <label class="" for="file">File</label>
                    <label class="fileContainer">
                        <span class="fileName" v-if="fileBlob" >{{fileBlob.name}}</span>
                        <span class="fa fa-upload"></span>
                        <input type="file" class="form-control-file" id="file" :required="!file.id"
                               @change="attachFile($event)">
                    </label>

                    <small v-if="file.id">You can upload another file to replace <a :href="`/files/${file.id}/pdf`"
                                                                                    target="_blank">existing one</a>
                    </small>
                </div>

                <div class="form-group col-sm-12 col-md-6">
                    <label for="itemId" class="mr-2">Item # / MSDS #</label>
                    <input type="number" name="itemId"
                           id="itemId" class="form-control" required v-model="file.itemId">
                </div>

                <div class="col-md-12 text-center mt-5" @click="save">
                    <button type="submit" class="btn btn-lg btn-outline-info" :disabled="saving">Save</button>
                    <div class="spinner-border text-info" role="status" v-show="saving">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </form>
        </div>

        <div class="card-footer">
            <a href="/file">< Back</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SaveUpload",
        props: ['file'],
        data: () => {
            return {
                // file: {manufacturer: null, title: null, itemId: null},
                saving: false,
                fileBlob: null
            }
        },
        methods: {
            save() {
                if (!this.isFormValid()) {
                    this.$swal("Incomplete data!", "All fields are mandatory", "error");
                    return;
                }
                if (this.saving){
                    return;
                }
                this.saving = true;

                let formData = new FormData();

                formData.append('file', this.file.file);
                formData.append('title', this.file.title);
                formData.append('manufacturer', this.file.manufacturer);
                formData.append('itemId', this.file.itemId);

                let url = this.file.id ? `/api/files/${this.file.id}` : '/api/files';

                window.axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(
                    (res) => {
                        this.saving = false;
                        this.$swal("File saved!", "Your file has ben saved!", "success");
                    }
                ).catch((error) => {
                    this.$swal("An error has ocurred!", error.response.data, "error");
                    this.saving = false;
                });
            },
            attachFile(event) {
                let blob = event.target.files[0];
                if (blob.type !== 'application/pdf') {
                    this.$swal("Invalid file!", "Your file must be a pdf!", "error");
                    return;
                }
                console.log(blob);
                this.file.file = blob;
                this.fileBlob = blob;
            },
            isFormValid: function () {

                let requiredFill = this.file.title && this.file.manufacturer && this.file.itemId;

                return this.file.id ? requiredFill : requiredFill && this.file.file;
            }
        }
    }
</script>

<style scoped lang="scss">

    @import "../../css/colors";

    .form-group, .custom-file {
        margin-top: 25px;
    }
    .file-input {

        .fileContainer {
            overflow: hidden;
            position: relative;
            padding: 0;
        }

        .fileContainer [type=file] {
            cursor: inherit;
            display: block;
            font-size: 999px;
            filter: alpha(opacity=0);
            min-height: 100%;
            min-width: 100%;
            opacity: 0;
            position: absolute;
            right: 0;
            text-align: right;
            top: 0;
        }

        /* Example stylistic flourishes */

        .fileContainer {
            background: $grey;
            border-radius: .25em;
            float: left;
        }

        .fileContainer [type=file] {
            cursor: pointer;
        }

        label, input{
            display: inline;
            cursor: pointer;
        }
        label:first-child{
            width: 10%;
        }
        label:nth-child(2){
            width: 70%;
            height: 34px;
        }
        .fa{
            float: right;
            background-color: white;
            height: 100%;
            padding: 8px;
            border: 1px solid lightgrey;
            border-radius: 0 0.25rem 0.25rem 0;
        }
        .fileName{
            position: relative;
            padding: 5px 10px;
            display: inline-block;
            width: 87%;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #6c757d;
            overflow-x: hidden;
        }
    }
</style>