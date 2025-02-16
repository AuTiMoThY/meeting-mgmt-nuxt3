export const deviceDs = {
    columns: [
        { name: "name", field: "name", label: "設備名稱" },
        { name: "typeName", field: "typeName", label: "設備類型" },
        { name: "power", field: "power", label: "電量" },
        { name: "bluetooth", field: "bluetooth", label: "藍牙" },
        { name: "wifi", field: "wifi", label: "Wi-Fi" },
        { name: "operate", field: "operate", label: "操作" }
    ],
    data: [
        {
            id: 1,
            name: "設備名稱A",
            type: {
                id: 2,
                name: "桌牌"
            },
            power: 100,
            bluetooth: 1,
            wifi: 0,
            number: "F-23"
        },
        {
            id: 2,
            name: "設備名稱B",
            type: {
                id: 1,
                name: "門牌"
            },
            power: 50,
            bluetooth: 0,
            wifi: 1,
            number: "C-87"
        },
        {
            id: 3,
            name: "設備名稱C",
            type: {
                id: 2,
                name: "桌牌"
            },
            power: 75,
            bluetooth: 1,
            wifi: 1,
            number: "H-45"
        },
        {
            id: 4,
            name: "設備名稱D",
            type: {
                id: 3,
                name: "迎賓牌"
            },
            power: 25,
            bluetooth: 1,
            wifi: 1,
            number: "A-91"
        },
        {
            id: 5,
            name: "設備名稱E",
            type: {
                id: 2,
                name: "桌牌"
            },
            power: 0,
            bluetooth: 1,
            wifi: 0,
            number: "J-12"
        },
        {
            id: 6,
            name: "設備名稱F",
            type: {
                id: 1,
                name: "門牌"
            },
            power: 100,
            bluetooth: 1,
            wifi: 1,
            number: "B-67"
        },
        {
            id: 7,
            name: "設備名稱G",
            type: {
                id: 3,
                name: "迎賓牌"
            },
            power: 50,
            bluetooth: 1,
            wifi: 0,
            number: "E-34"
        },
        {
            id: 8,
            name: "設備名稱H",
            type: {
                id: 2,
                name: "桌牌"
            },
            power: 75,
            bluetooth: 1,
            wifi: 1,
            number: "G-78"
        },
        {
            id: 9,
            name: "設備名稱I",
            type: {
                id: 1,
                name: "門牌"
            },
            power: 25,
            bluetooth: 1,
            wifi: 0,
            number: "D-56"
        },
        {
            id: 10,
            name: "設備名稱J",
            type: {
                id: 3,
                name: "迎賓牌"
            },
            power: 0,
            bluetooth: 0,
            wifi: 1,
            number: "I-09"
        }
    ]
};
