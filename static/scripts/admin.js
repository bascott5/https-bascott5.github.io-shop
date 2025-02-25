"use strict";

document.addEventListener('alpine:init', () => {
    Alpine.data('upload', () => ({
        jsonContainer: document.getElementsByClassName("json-container"),
        jsonFiles: [],

        fileChange: {
            ['@change'](e) {
                this.jsonFiles.push(e.target.files[0]);
            },
        },

        clickFile: {
            ['@click']() {
                this.jsonFiles.splice(this.$el.id, 1);
            }
        }
    }));
});