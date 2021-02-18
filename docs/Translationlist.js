function Translationlist() {
    var patt = /.csv/g;
    var i ;
    var CSVList = ["アトヲニゴサズ"];
    var CSVListLen = CSVList.length;
    var listCont = document.getElementById("List");

    for (i=0; i < CSVListLen; i++){
        var section = document.createElement("section");
        var itemHeader = document.createElement("h1");
        var item = document.createTextNode(CSVList[i]);
        section.id = CSVList[i];

        itemHeader.appendChild(item);
        section.appendChild(itemHeader);

        var CSV, CSVLen, j, k, l;
        var CSV = $.get("../" + CSVList[i] + ".csv", function(csv) {
            var CSV = csv.split(",");
            return CSV;
        });
        // CSV = ["1","2","3","4","5","6"]
    
        CSVLen = CSV.length;
    
        var table = document.createElement("table");
        var tableRow = document.createElement("tr");
    
        for (j=0; j<3; j++) {
            var tableHeader = document.createElement("th");
            var headerContent = document.createTextNode(CSV[j]);
            tableHeader.appendChild(headerContent);
            tableRow.appendChild(tableHeader);
        }
        table.appendChild(tableRow);
    
        for (j=3; j < CSVLen; j+=3) {
            var tableRow = document.createElement("tr");
            for (k=j, l=j+3; k < l ;k++) {
                var tableCell = document.createElement("td");
                var cellContent = document.createTextNode(CSV[k]);
                tableCell.appendChild(cellContent);
                tableRow.appendChild(tableCell);
            }
            table.appendChild(tableRow);
        }
    
        section.appendChild(table);
        listCont.appendChild(section);
    }
    }