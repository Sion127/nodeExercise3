const { clear } = require("console");
const fs = require("fs");
const process = require ("process");
let path = process.argv[2];
let content = process.argv[3] ? process.argv[3] : "";
let option = path;
const htmlFile = "index.html";
const cssFile = "styles.css"; 
const jsFile =  "main.js";

    switch(option){
        
        case "HTML":

            fs.writeFile("index.html",content,{encoding:"utf-8"},(err) => {
                if (err) {
                    console.log(`Can't be created the file ${path}`);
                    console.error(err);
                    } else {
                        console.log(`File ${path} was created`);
                    }
                });

        break;

        case "CSS":
            
            fs.writeFile("styles.css",content,{encoding:"utf-8"},(err) => {
                if (err) {
                    console.log(`Can't be created the file ${path}`);
                    console.error(err);
                    } else {
                        console.log(`File ${path} was created`);
                    }
                });

        break;

        case "JS":
            
            fs.writeFile("main.js",content,{encoding:"utf-8"},(err) => {
                if (err) {
                    console.log(`Can't be created the file ${path}`);
                    console.error(err);
                    } else {
                           console.log(`File ${path} was created`);
                    }
                });

        break;

        case "Init":
            
            fs.writeFile(htmlFile,content,{encoding:"utf-8"},(err) => {
                if (err) {
                    console.log(`Can´t be created the fies ${htmlFile}`);
                    console.error(err);
                    } else {
                           console.log(`Files ${htmlFile} were created`);
                    }
                });

                fs.writeFile(cssFile,content,{encoding:"utf-8"},(err) => {
                    if (err) {
                        console.log(`Can´t be created the fies ${cssFile}`);
                        console.error(err);
                        } else {
                               console.log(`Files ${cssFile} were created`);
                        }
                    });

                    fs.writeFile(jsFile,content,{encoding:"utf-8"},(err) => {
                        if (err) {
                            console.log(`Can´t be created the fies ${jsFile}`);
                            console.error(err);
                            } else {
                                   console.log(`Files ${jsFile} were created`);
                            }
                        });
        break;

        default:
            console.log("This option is not able");
        break;
    }
    
    
