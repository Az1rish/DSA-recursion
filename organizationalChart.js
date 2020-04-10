const orgChart = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: {
                Steve: {},
                Kyle: {},
                Andra: {}
            },
            Zhao: {
                Richie: {},
                Sofia: {},
                Jen: {}
            }
        },
        Schrage: {
            VanDyck: {
                Sabrina: {},
                Michelle: {},
                Josh: {}
            },
            Swain: {
                Blanch: {},
                Tom: {},
                Joe: {}
            }
        },
        Sandberg: {
            Goler: {
                Eddie: {},
                Julie: {},
                Annie: {}
            },
            Hernandez: {
                Rowi: {},
                Inga: {},
                Morgan: {}
            },
            Moissinac: {
                Amy: {},
                Chuck: {},
                Vinni: {}
            },
            Kelley: {
                Eric: {},
                Ana: {},
                Wes: {}
            }
        }
    }
}

function printChart(chartObj, indent) {
    //   let indent = ""
        if (!Object.keys(chartObj).length) {
            return;
        }
    
        else {
            // Make array of object keys
            const chartArray = Object.keys(chartObj);
            // Make for loop over array
            for ( let i = 0; i < chartArray.length; i++) {
                // Inside loop - Print key
               
              let newObj = chartArray[i]
               console.log(indent + newObj);
    //           console.log('newObj', chartObj[newObj])
                // Call function again recursively - argument is that keys value
                return printChart(chartObj[newObj], indent + "\t");//value stored at that key
                // Print name of key
              
    //       indent = indent + "\r" + "\t" 
            }
            
        }
    }
    printChart(orgChart, "");                        
  