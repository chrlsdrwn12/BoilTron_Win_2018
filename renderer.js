// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

(function () {
    const holder = document;
    const fs = require('fs');
    const extract = require('extract-zip');
    const remote = require('electron').remote;
    const userData = remote.getGlobal('userData');
    const appPath = remote.getGlobal('appPath');
    const {dialog} = require('electron').remote;
    const FileSurgeon = require("filesurgeon");
    const Filehound = require('filehound');

    $('#cancel').click(function(){
        var window = remote.getCurrentWindow();
        window.close(); 
    });

    $('#leftbut').click(function(){
        alert('You clicked the left button');
    });

    $('#rightbut').click(function(){
        alert('You clicked the right button');
    });

    $('#disabledbut').click(function(){
        alert('You clicked the wrong button');
    });

})();