


var viz;

function initViz() {
    var containerDiv = document.getElementById("MyWebApp"),
        // url = "https://public.tableau.com/views/Alexa_0/StateGameMap",
        url = "https://public.tableau.com/views/StatePop_2/MapSheet"
        // https://public.tableau.com/views/Alexa_0/StateGameMap?:embed=y&:display_count=yes
        // url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
            options = {
                hideTabs: true,
                onFirstInteractive: function () {
                    console.log("Run this code when the viz has finished loading.");
                }
            };
            viz = new tableau.Viz(containerDiv, url, options); // Create a viz object and embed it in the container div.
     }

function filterState(st) {
    // console.log('filtering on ' + st);
    if (st == "california") {
        st = "California";
    }

    console.log('filter on ' + st + ' for you!');

    sheet = viz.getWorkbook().getActiveSheet();

    if(sheet.getSheetType() == 'worksheet') {
        sheet.applyFilterAsync("Name", st, tableau.FilterUpdateType.ADD);

    }
    // else {
    //     worksheetArray = sheet.getWorksheets();
    //     console.log("is NOT a worksheet");
    //     worksheetArray[0].applyFilterAsync("State", st, 'ADD');
    // }

}