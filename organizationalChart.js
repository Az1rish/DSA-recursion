const orgChart = {
    name: "Zuckerberg",
    subs: [
        { 
            name: "Schroepfer",
            subs: [
                { 
                    name: "Bosworth",
                    subs: [
                        { name: "Steve" },
                        { name: "Kyle" },
                        { name: "Andra"}
                    ]
                },
                {
                    name: "Zhao",
                    subs: [
                        { name: "Richie" },
                        { name: "Sofia" },
                        { name: "Jen" }
                    ]     
                }
            ]
        },
        {
            name: "Schrage",
            subs: [
                {
                    name: "VanDyck",
                    subs: [
                        { name: "Sabrina" },
                        { name: "Michelle" },
                        { name: "Josh" }
                    ]
                },
                {
                    name: "Swain",
                    subs: [
                        { name: "Blanch" },
                        { name: "Tom" },
                        { name: "Joe" }
                    ]
                }
            ]
        },
        {
            name: "Sandberg",
            subs: [
                {
                    name: "Goler",
                    subs: [
                        { name: "Eddie" },
                        { name: "Julie" },
                        { name: "Annie" }
                    ]   
                },
                {
                    name: "Hernandez",
                    subs: [
                        { name: "Rowi" },
                        { name: "Inga" },
                        { name: "Morgan" }
                    ]  
                },
                {
                    name: "Moissinac",
                    subs: [
                        { name: "Amy" },
                        { name: "Chuck" },
                        { name: "Vinni" }
                    ] 
                },
                {
                    name: "Kelley",
                    subs: [
                        { name: "Eric" },
                        { name: "Ana" },
                        { name: "Wes" }
                    ] 
                }
            ]    
        }
    ]
}

function printChart(chartObj) {
    if (!chartObj.subs) {
        console.log("\t" + chartObj.name);
    }
    else {
      // print name value of each object in subs array
      console.log("\t" + chartObj.name);
      for (let i = 0; i < chartObj.subs.length; i++) {
       printChart(chartObj.subs[i]);
       }
  }
}
    
printChart(orgChart);
