export const contentDs = {
    columns: [
        { name: "name", field: "name", label: "名稱" },
        { name: "can_use_deviceName", field: "can_use_device", label: "可用設備" },
        { name: "applied_device", field: "applied_device", label: "套用中設備" },
        { name: "operate", field: "operate", label: "操作" }
    ],
    data: [
        {
            id: 1,
            name: "內容A",
            can_use_device: {
                id: 2,
                name: "桌牌"
            },
            applied_device: 3,
            meeting: {
                id: 15,
                name: "績效考核會議",
                date: "2025/01/09",
                timeStart: "14:00",
                timeEnd: "15:30",
                peopleList: [
                    {
                        id: 2,
                        name: "李美玲",
                        comp: "科技創新有限公司",
                        department: "行銷部",
                        duties: "行銷經理",
                        type: 1
                    },
                    {
                        id: 4,
                        name: "陳雅琪",
                        comp: "科技創新有限公司",
                        department: "人力資源部",
                        duties: "人資專員",
                        type: 1
                    },
                    {
                        id: 6,
                        name: "黃詩涵",
                        comp: "綠能環保企業",
                        department: "客戶服務部",
                        duties: "客服主管",
                        type: 2
                    },
                    {
                        id: 8,
                        name: "蔡佳玲",
                        comp: "綠能環保企業",
                        department: "物流部",
                        duties: "物流協調員",
                        type: 2
                    },
                    {
                        id: 10,
                        name: "許雅婷",
                        comp: "科技創新有限公司",
                        department: "品質管理部",
                        duties: "品管主管",
                        type: 1
                    }
                ],
                room: {
                    id: 7,
                    room: "G會議室",
                    status: 1
                }
            },
            qrcode: "https://www.imdms.net/"
        },
        {
            id: 2,
            name: "內容B",
            can_use_device: {
                id: 1,
                name: "門牌"
            },
            applied_device: 7,
            meeting: {
                id: 8,
                name: "客戶需求會議",
                date: "2025/01/10",
                timeStart: "10:30",
                timeEnd: "12:00",
                peopleList: [
                    {
                        id: 1,
                        name: "張小明",
                        comp: "科技創新有限公司",
                        department: "研發部",
                        duties: "資深工程師",
                        type: 1
                    },
                    {
                        id: 3,
                        name: "王大為",
                        comp: "綠能環保企業",
                        department: "生產部",
                        duties: "生產主管",
                        type: 2
                    },
                    {
                        id: 4,
                        name: "陳雅琪",
                        comp: "科技創新有限公司",
                        department: "人力資源部",
                        duties: "人資專員",
                        type: 1
                    },
                    {
                        id: 6,
                        name: "黃詩涵",
                        comp: "綠能環保企業",
                        department: "客戶服務部",
                        duties: "客服主管",
                        type: 2
                    },
                    {
                        id: 8,
                        name: "蔡佳玲",
                        comp: "綠能環保企業",
                        department: "物流部",
                        duties: "物流協調員",
                        type: 2
                    },
                    {
                        id: 9,
                        name: "郭俊傑",
                        comp: "綠能環保企業",
                        department: "研發部",
                        duties: "產品設計師",
                        type: 2
                    }
                ],
                room: {
                    id: 4,
                    room: "D會議室",
                    status: 0
                }
            },
            qrcode: "https://www.imdms.net/"
        },
        {
            id: 3,
            name: "內容C",
            can_use_device: {
                id: 3,
                name: "迎賓牌"
            },
            applied_device: 2,
            meeting: {
                id: 19,
                name: "品質管理會議",
                date: "2025/01/08",
                timeStart: "15:00",
                timeEnd: "16:30",
                peopleList: [
                    {
                        id: 1,
                        name: "張小明",
                        comp: "科技創新有限公司",
                        department: "研發部",
                        duties: "資深工程師",
                        type: 1
                    },
                    {
                        id: 3,
                        name: "王大為",
                        comp: "綠能環保企業",
                        department: "生產部",
                        duties: "生產主管",
                        type: 2
                    },
                    {
                        id: 4,
                        name: "陳雅琪",
                        comp: "科技創新有限公司",
                        department: "人力資源部",
                        duties: "人資專員",
                        type: 1
                    },
                    {
                        id: 6,
                        name: "黃詩涵",
                        comp: "綠能環保企業",
                        department: "客戶服務部",
                        duties: "客服主管",
                        type: 2
                    },
                    {
                        id: 7,
                        name: "吳建志",
                        comp: "科技創新有限公司",
                        department: "銷售部",
                        duties: "業務代表",
                        type: 1
                    },
                    {
                        id: 9,
                        name: "郭俊傑",
                        comp: "綠能環保企業",
                        department: "研發部",
                        duties: "產品設計師",
                        type: 2
                    },
                    {
                        id: 10,
                        name: "許雅婷",
                        comp: "科技創新有限公司",
                        department: "品質管理部",
                        duties: "品管主管",
                        type: 1
                    }
                ],
                room: {
                    id: 10,
                    room: "J會議室",
                    status: 0
                }
            },
            qrcode: "https://www.imdms.net/"
        },
        {
            id: 4,
            name: "內容D",
            can_use_device: {
                id: 2,
                name: "桌牌"
            },
            applied_device: 9,
            meeting: {
                id: 3,
                name: "UI設計討論",
                date: "2025/01/10",
                timeStart: "09:30",
                timeEnd: "11:00",
                peopleList: [
                    {
                        id: 2,
                        name: "李美玲",
                        comp: "科技創新有限公司",
                        department: "行銷部",
                        duties: "行銷經理",
                        type: 1
                    },
                    {
                        id: 4,
                        name: "陳雅琪",
                        comp: "科技創新有限公司",
                        department: "人力資源部",
                        duties: "人資專員",
                        type: 1
                    },
                    {
                        id: 7,
                        name: "吳建志",
                        comp: "科技創新有限公司",
                        department: "銷售部",
                        duties: "業務代表",
                        type: 1
                    },
                    {
                        id: 9,
                        name: "郭俊傑",
                        comp: "綠能環保企業",
                        department: "研發部",
                        duties: "產品設計師",
                        type: 2
                    }
                ],
                room: {
                    id: 2,
                    room: "B會議室",
                    status: 0
                }
            },
            qrcode: "https://www.imdms.net/"
        },
        {
            id: 5,
            name: "內容E",
            can_use_device: {
                id: 1,
                name: "門牌"
            },
            applied_device: 5,
            meeting: {
                id: 12,
                name: "教育訓練",
                date: "2025/01/09",
                timeStart: "13:00",
                timeEnd: "14:30",
                peopleList: [
                    {
                        id: 1,
                        name: "張小明",
                        comp: "科技創新有限公司",
                        department: "研發部",
                        duties: "資深工程師",
                        type: 1
                    },
                    {
                        id: 2,
                        name: "李美玲",
                        comp: "科技創新有限公司",
                        department: "行銷部",
                        duties: "行銷經理",
                        type: 1
                    },
                    {
                        id: 3,
                        name: "王大為",
                        comp: "綠能環保企業",
                        department: "生產部",
                        duties: "生產主管",
                        type: 2
                    },
                    {
                        id: 4,
                        name: "陳雅琪",
                        comp: "科技創新有限公司",
                        department: "人力資源部",
                        duties: "人資專員",
                        type: 1
                    },
                    {
                        id: 5,
                        name: "林志豪",
                        comp: "綠能環保企業",
                        department: "財務部",
                        duties: "財務分析師",
                        type: 2
                    },
                    {
                        id: 6,
                        name: "黃詩涵",
                        comp: "綠能環保企業",
                        department: "客戶服務部",
                        duties: "客服主管",
                        type: 2
                    },
                    {
                        id: 7,
                        name: "吳建志",
                        comp: "科技創新有限公司",
                        department: "銷售部",
                        duties: "業務代表",
                        type: 1
                    },
                    {
                        id: 8,
                        name: "蔡佳玲",
                        comp: "綠能環保企業",
                        department: "物流部",
                        duties: "物流協調員",
                        type: 2
                    },
                    {
                        id: 9,
                        name: "郭俊傑",
                        comp: "綠能環保企業",
                        department: "研發部",
                        duties: "產品設計師",
                        type: 2
                    },
                    {
                        id: 10,
                        name: "許雅婷",
                        comp: "科技創新有限公司",
                        department: "品質管理部",
                        duties: "品管主管",
                        type: 1
                    }
                ],
                room: {
                    id: 6,
                    room: "F會議室",
                    status: 0
                }
            },
            qrcode: "https://www.imdms.net/"
        },
        {
            id: 6,
            name: "內容F",
            can_use_device: {
                id: 3,
                name: "迎賓牌"
            },
            applied_device: 1,
            meeting: {
                id: 7,
                name: "技術研發會議",
                date: "2025/01/10",
                timeStart: "14:00",
                timeEnd: "15:30",
                peopleList: [
                    {
                        id: 2,
                        name: "李美玲",
                        comp: "科技創新有限公司",
                        department: "行銷部",
                        duties: "行銷經理",
                        type: 1
                    },
                    {
                        id: 3,
                        name: "王大為",
                        comp: "綠能環保企業",
                        department: "生產部",
                        duties: "生產主管",
                        type: 2
                    },
                    {
                        id: 5,
                        name: "林志豪",
                        comp: "綠能環保企業",
                        department: "財務部",
                        duties: "財務分析師",
                        type: 2
                    },
                    {
                        id: 7,
                        name: "吳建志",
                        comp: "科技創新有限公司",
                        department: "銷售部",
                        duties: "業務代表",
                        type: 1
                    },
                    {
                        id: 8,
                        name: "蔡佳玲",
                        comp: "綠能環保企業",
                        department: "物流部",
                        duties: "物流協調員",
                        type: 2
                    },
                    {
                        id: 10,
                        name: "許雅婷",
                        comp: "科技創新有限公司",
                        department: "品質管理部",
                        duties: "品管主管",
                        type: 1
                    }
                ],
                room: {
                    id: 3,
                    room: "C會議室",
                    status: 1
                }
            },
            qrcode: "https://www.imdms.net/"
        },
        {
            id: 7,
            name: "內容G",
            can_use_device: {
                id: 2,
                name: "桌牌"
            },
            applied_device: 8,
            meeting: {
                id: 16,
                name: "資安會議",
                date: "2025/01/10",
                timeStart: "15:00",
                timeEnd: "16:30",
                peopleList: [
                    {
                        id: 1,
                        name: "張小明",
                        comp: "科技創新有限公司",
                        department: "研發部",
                        duties: "資深工程師",
                        type: 1
                    },
                    {
                        id: 3,
                        name: "王大為",
                        comp: "綠能環保企業",
                        department: "生產部",
                        duties: "生產主管",
                        type: 2
                    },
                    {
                        id: 4,
                        name: "陳雅琪",
                        comp: "科技創新有限公司",
                        department: "人力資源部",
                        duties: "人資專員",
                        type: 1
                    },
                    {
                        id: 5,
                        name: "林志豪",
                        comp: "綠能環保企業",
                        department: "財務部",
                        duties: "財務分析師",
                        type: 2
                    },
                    {
                        id: 7,
                        name: "吳建志",
                        comp: "科技創新有限公司",
                        department: "銷售部",
                        duties: "業務代表",
                        type: 1
                    },
                    {
                        id: 8,
                        name: "蔡佳玲",
                        comp: "綠能環保企業",
                        department: "物流部",
                        duties: "物流協調員",
                        type: 2
                    },
                    {
                        id: 10,
                        name: "許雅婷",
                        comp: "科技創新有限公司",
                        department: "品質管理部",
                        duties: "品管主管",
                        type: 1
                    }
                ],
                room: {
                    id: 8,
                    room: "H會議室",
                    status: 0
                }
            },
            qrcode: "https://www.imdms.net/"
        },
        {
            id: 8,
            name: "內容H",
            can_use_device: {
                id: 1,
                name: "門牌"
            },
            applied_device: 4,
            meeting: {
                id: 1,
                name: "業務小組晨會",
                date: "2025/01/10",
                timeStart: "09:00",
                timeEnd: "10:00",
                peopleList: [
                    {
                        id: 1,
                        name: "張小明",
                        comp: "科技創新有限公司",
                        department: "研發部",
                        duties: "資深工程師",
                        type: 1
                    },
                    {
                        id: 4,
                        name: "陳雅琪",
                        comp: "科技創新有限公司",
                        department: "人力資源部",
                        duties: "人資專員",
                        type: 1
                    },
                    {
                        id: 6,
                        name: "黃詩涵",
                        comp: "綠能環保企業",
                        department: "客戶服務部",
                        duties: "客服主管",
                        type: 2
                    },
                    {
                        id: 8,
                        name: "蔡佳玲",
                        comp: "綠能環保企業",
                        department: "物流部",
                        duties: "物流協調員",
                        type: 2
                    },
                    {
                        id: 9,
                        name: "郭俊傑",
                        comp: "綠能環保企業",
                        department: "研發部",
                        duties: "產品設計師",
                        type: 2
                    }
                ],
                room: {
                    id: 1,
                    room: "A會議室",
                    status: 1
                }
            },
            qrcode: "https://www.imdms.net/"
        },
        {
            id: 9,
            name: "內容I",
            can_use_device: {
                id: 3,
                name: "迎賓牌"
            },
            applied_device: 10,
            meeting: {
                id: 20,
                name: "週會",
                date: "2025/01/09",
                timeStart: "16:30",
                timeEnd: "18:00",
                peopleList: [
                    {
                        id: 1,
                        name: "張小明",
                        comp: "科技創新有限公司",
                        department: "研發部",
                        duties: "資深工程師",
                        type: 1
                    },
                    {
                        id: 2,
                        name: "李美玲",
                        comp: "科技創新有限公司",
                        department: "行銷部",
                        duties: "行銷經理",
                        type: 1
                    },
                    {
                        id: 3,
                        name: "王大為",
                        comp: "綠能環保企業",
                        department: "生產部",
                        duties: "生產主管",
                        type: 2
                    },
                    {
                        id: 4,
                        name: "陳雅琪",
                        comp: "科技創新有限公司",
                        department: "人力資源部",
                        duties: "人資專員",
                        type: 1
                    },
                    {
                        id: 5,
                        name: "林志豪",
                        comp: "綠能環保企業",
                        department: "財務部",
                        duties: "財務分析師",
                        type: 2
                    },
                    {
                        id: 6,
                        name: "黃詩涵",
                        comp: "綠能環保企業",
                        department: "客戶服務部",
                        duties: "客服主管",
                        type: 2
                    },
                    {
                        id: 7,
                        name: "吳建志",
                        comp: "科技創新有限公司",
                        department: "銷售部",
                        duties: "業務代表",
                        type: 1
                    },
                    {
                        id: 8,
                        name: "蔡佳玲",
                        comp: "綠能環保企業",
                        department: "物流部",
                        duties: "物流協調員",
                        type: 2
                    },
                    {
                        id: 9,
                        name: "郭俊傑",
                        comp: "綠能環保企業",
                        department: "研發部",
                        duties: "產品設計師",
                        type: 2
                    },
                    {
                        id: 10,
                        name: "許雅婷",
                        comp: "科技創新有限公司",
                        department: "品質管理部",
                        duties: "品管主管",
                        type: 1
                    }
                ],
                room: {
                    id: 10,
                    room: "J會議室",
                    status: 0
                }
            },
            qrcode: "https://www.imdms.net/"
        },
        {
            id: 10,
            name: "內容J",
            can_use_device: {
                id: 2,
                name: "桌牌"
            },
            applied_device: 6,
            meeting: {
                id: 5,
                name: "專案進度報告",
                date: "2025/01/10",
                timeStart: "10:00",
                timeEnd: "11:30",
                peopleList: [
                    {
                        id: 1,
                        name: "張小明",
                        comp: "科技創新有限公司",
                        department: "研發部",
                        duties: "資深工程師",
                        type: 1
                    },
                    {
                        id: 2,
                        name: "李美玲",
                        comp: "科技創新有限公司",
                        department: "行銷部",
                        duties: "行銷經理",
                        type: 1
                    },
                    {
                        id: 4,
                        name: "陳雅琪",
                        comp: "科技創新有限公司",
                        department: "人力資源部",
                        duties: "人資專員",
                        type: 1
                    },
                    {
                        id: 6,
                        name: "黃詩涵",
                        comp: "綠能環保企業",
                        department: "客戶服務部",
                        duties: "客服主管",
                        type: 2
                    },
                    {
                        id: 7,
                        name: "吳建志",
                        comp: "科技創新有限公司",
                        department: "銷售部",
                        duties: "業務代表",
                        type: 1
                    },
                    {
                        id: 9,
                        name: "郭俊傑",
                        comp: "綠能環保企業",
                        department: "研發部",
                        duties: "產品設計師",
                        type: 2
                    },
                    {
                        id: 10,
                        name: "許雅婷",
                        comp: "科技創新有限公司",
                        department: "品質管理部",
                        duties: "品管主管",
                        type: 1
                    }
                ],
                room: {
                    id: 3,
                    room: "C會議室",
                    status: 1
                }
            },
            qrcode: "https://www.imdms.net/"
        }
    ]
};
