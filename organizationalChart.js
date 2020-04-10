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
        if (!Object.keys(chartObj).length) {
            return;
        }
        else {
            // Make array of object keys
            const chartArray = Object.keys(chartObj);
            // Make for loop over array
            for ( let i = 0; i < chartArray.length; i++) {
                // Inside loop - Print key
              let newObj = chartArray[i];
                // Call function again recursively - argument is that keys value
                //value stored at that key
                // Print name of key
              indent += "\t";
              return indent + newObj + "\r" + printChart(chartObj[newObj], indent);
            }
             
        }
    }
    
    console.log(printChart(orgChart, ""));