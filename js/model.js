const model = {

    app: {
        currentpage: 'mainpage',
    },

    bikes: [
        { color: "black", type: "offroad" },
        { color: "red", type: "bmx" },
        { color: "yellow", type: "racing" }
    ],
    
    leietid: [
        {
            bikeid: 0,
            start: {
                year: 2021,
                month: 12,
                day: 24,
                hour: 12,
                minute: 0
            },
            end: {
                year: 2021,
                month: 12,
                day: 24,
                hour: 14,
                minute: 0
            }
        }
    ]
};


console.table(model.bikes);


console.table(model.leietid);
