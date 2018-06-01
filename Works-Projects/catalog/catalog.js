var submitBtn = document.querySelector('#Confirm');
var clearBtn = document.querySelector('#Clear');
var inputs = document.querySelectorAll('.inputDiv input[type=text]');
// var copyButtons = document.querySelectorAll("div.outputDiv > button");
var nodeOut = document.querySelector('#nodeScript');
var DbOut = document.querySelector('#databaseScript');
var openFile = document.querySelector('#openFile');
var node, server, port, instance, comment, database;

//Generate
submitBtn.addEventListener('click', function () {
    // debugger
    // if (event.target.id != 'Confirm' ) return;
    if (validForm()) {
        console.log(inputs[0].value);
        nodeOut.value = "db2 CATALOG TCPIP NODE "
            + inputs[0].value + " REMOTE "
            + inputs[1].value + " SERVER "
            + inputs[2].value + " REMOTE_INSTANCE "
            + inputs[3].value + " ostype aix with \\'"
            + inputs[5].value + "\\'";

        DbOut.value = "db2 CATALOG DATABASE "
            + inputs[4].value + " AS "
            + inputs[4].value + " AT NODE "
            + inputs[0].value + " authentication server_encrypt with \\' "
            + inputs[5].value + "\\'";
    }
    event.preventDefault();

});


//clear

clearBtn.addEventListener('click', function () {
    // debugger;
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        inputs[i].classList.remove('invalid');
    }
    nodeOut.innerHTML = "";
    DbOut.innerHTML = "";
    openFile.value = "";
    signal.innerHTML="";
});

//valid input
function validForm() {
    var valid = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].classList.add('invalid');
            valid = false;
        }
    }
    return valid;
}

// var reader = new FileReader();
//readfile
function readText(event) {
    // check if file existed
    if (event.files && event.files[0]) {
        // Create FileReader obj to use its read functions
        var reader = new FileReader();

        // called when the file is finished loading
        reader.onload = function (loadedFile) {
            // debugger

            //save all file content to output
            var output = loadedFile.target.result;

            // process line by line, call getElements func to retrive inst,host...
            output = output.split("\n").filter(getElements);

            // populate retrieved data to input text box
            inputs[0].value = node;
            inputs[1].value = host;
            inputs[2].value = port;
            inputs[3].value = instance;
            inputs[4].value = database;
            inputs[5].value = comment;
            // document.getElementById('main').innerHTML = instance + " " + host
            // + " " + node + " " + database+ " " + comment+ " " + port;


        };//end onload()

        //read file content as text 
        reader.readAsText(event.files[0]);
    }//end if html5 filelist support
}

//retrieve data from each line
function getElements(lines) {
    // debugger
    if (lines.includes("Instance=in"))   //return true/fales
    {
        var instances = lines.split("=");
        instance = instances[1];
        // return instance;
        // return;
    }
    if (lines.includes("Hostname="))   //return true/fales
    {
        var instances = lines.split("=");
        host = instances[1];
    }

    if (lines.includes("Portnumber="))   //return true/fales
    {
        var instances = lines.split("=");
        port = instances[1];
    }
    if (lines.includes("NODE>"))   //return true/fales
    {
        var instances = lines.split(">");
        node = instances[1].replace("]", "");
    }
    if (lines.includes("DBName="))   //return true/fales
    {
        var instances = lines.split("=");
        database = instances[1];
    }
    if (lines.includes("Comment="))   //return true/fales
    {
        var instances = lines.split("=");
        comment = instances[1];
    }
}

var nodeBtn = document.querySelector('#nodBtn');
var dbBtn = document.querySelector('#dbBtn');
var signal = document.querySelector('#signal');

nodeBtn.addEventListener('click', function () {
    document.querySelector('#nodeScript').select();
    copy();
});

dbBtn.addEventListener('click', function () {
    document.querySelector('#databaseScript').select();
    copy();
});

function copy(){
    document.execCommand("copy");
    signal.innerHTML = "copied";
    signal.style.color = "red";
}