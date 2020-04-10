const orgChart = {
    name: Zuckerberg,
    subs: [
        { 
            name: Schroepfer,
            subs: [
                { 
                    name: Bosworth,
                    subs: [
                        { name: Steve },
                        { name: Kyle },
                        { name: Andra}
                    ]
                },
                {
                    name: Zhao,
                    subs: [
                        { name: Richie },
                        { name: Sofia },
                        { name: Jen }
                    ]     
                }
            ]
        },
        {
            name: Schrage,
            subs: [
                {
                    name: VanDyck,
                    subs: [
                        { name: Sabrina },
                        { name: Michelle },
                        { name: Josh }
                    ]
                },
                {
                    name: Swain,
                    subs: [
                        { name: Blanch },
                        { name: Tom },
                        { name: Joe }
                    ]
                }
            ]
        },
        {
            name: Sandberg,
            subs: [
                {
                    name: Goler,
                    subs: [
                        { name: Eddie },
                        { name: Julie },
                        { name: Annie }
                    ]   
                },
                {
                    name: Hernandez,
                    subs: [
                        { name: Rowi },
                        { name: Inga },
                        { name: Morgan }
                    ]  
                },
                {
                    name: Moissinac,
                    subs: [
                        { name: Amy },
                        { name: Chuck },
                        { name: Vinni }
                    ] 
                },
                {
                    name: Kelley,
                    subs: [
                        { name: Eric },
                        { name: Ana },
                        { name: Wes }
                    ] 
                }
            ]    
        }
    ]
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