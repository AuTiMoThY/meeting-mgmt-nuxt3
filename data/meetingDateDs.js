export const meetingDateDs = {
    columns: [
        { name: "date", field: "date", label: "日期" },
        { name: "time", field: "time", label: "時間" },
        { name: "name", field: "name", label: "會議" },
        { name: "people", field: "people", label: "人數" },
        { name: "roomName", field: "roomName", label: "會議室" },
        { name: "operate", field: "operate", label: "操作" }
    ],
    data: [
        {
            id: 1,
            date: "2025/01/10",
            timeStart: "09:00",
            timeEnd: "10:00",
            name: "業務小組晨會",
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
        {
            id: 2,
            date: "2025/01/10",
            timeStart: "15:30",
            timeEnd: "17:00",
            name: "專案檢討會議",
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
                id: 1,
                room: "A會議室",
                status: 1
            }
        },
        {
            id: 3,
            date: "2025/01/10",
            timeStart: "09:30",
            timeEnd: "11:00",
            name: "UI設計討論",
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
        {
            id: 4,
            date: "2025/01/09",
            timeStart: "16:00",
            timeEnd: "17:30",
            name: "系統架構討論",
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
                    id: 5,
                    name: "林志豪",
                    comp: "綠能環保企業",
                    department: "財務部",
                    duties: "財務分析師",
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
                id: 2,
                room: "B會議室",
                status: 0
            }
        },
        {
            id: 5,
            date: "2025/01/10",
            timeStart: "10:00",
            timeEnd: "11:30",
            name: "專案進度報告",
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
        {
            id: 6,
            date: "2025/01/09",
            timeStart: "09:00",
            timeEnd: "10:30",
            name: "客戶服務會議",
            peopleList: [
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
        {
            id: 7,
            date: "2025/01/10",
            timeStart: "14:00",
            timeEnd: "15:30",
            name: "技術研發會議",
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
        {
            id: 8,
            date: "2025/01/10",
            timeStart: "10:30",
            timeEnd: "12:00",
            name: "客戶需求會議",
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
        {
            id: 9,
            date: "2025/01/10",
            timeStart: "11:00",
            timeEnd: "12:30",
            name: "部門主管會議",
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
                    id: 10,
                    name: "許雅婷",
                    comp: "科技創新有限公司",
                    department: "品質管理部",
                    duties: "品管主管",
                    type: 1
                }
            ],
            room: {
                id: 5,
                room: "E會議室",
                status: 1
            }
        },
        {
            id: 10,
            date: "2025/01/09",
            timeStart: "11:00",
            timeEnd: "12:30",
            name: "專案啟動會議",
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
                id: 5,
                room: "E會議室",
                status: 1
            }
        },
        {
            id: 11,
            date: "2025/01/10",
            timeStart: "13:00",
            timeEnd: "14:30",
            name: "產品規劃會議",
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
                id: 6,
                room: "F會議室",
                status: 0
            }
        },
        {
            id: 12,
            date: "2025/01/09",
            timeStart: "13:00",
            timeEnd: "14:30",
            name: "教育訓練",
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
                },
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
        {
            id: 13,
            date: "2025/01/10",
            timeStart: "15:30",
            timeEnd: "17:00",
            name: "跨部門會議",
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
                id: 6,
                room: "F會議室",
                status: 0
            }
        },
        {
            id: 14,
            date: "2025/01/10",
            timeStart: "13:30",
            timeEnd: "15:00",
            name: "行銷策略討論",
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
                id: 7,
                room: "G會議室",
                status: 1
            }
        },
        {
            id: 15,
            date: "2025/01/09",
            timeStart: "14:00",
            timeEnd: "15:30",
            name: "績效考核會議",
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
        {
            id: 16,
            date: "2025/01/10",
            timeStart: "15:00",
            timeEnd: "16:30",
            name: "資安會議",
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
        {
            id: 17,
            date: "2025/05/08",
            timeStart: "14:30",
            timeEnd: "16:00",
            name: "人資面試",
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
                    id: 5,
                    name: "林志豪",
                    comp: "綠能環保企業",
                    department: "財務部",
                    duties: "財務分析師",
                    type: 2
                },
                {
                    id: 8,
                    name: "蔡佳玲",
                    comp: "綠能環保企業",
                    department: "物流部",
                    duties: "物流協調員",
                    type: 2
                }
            ],
            room: {
                id: 9,
                room: "I會議室",
                status: 1
            }
        },
        {
            id: 18,
            date: "2025/01/09",
            timeStart: "16:00",
            timeEnd: "17:30",
            name: "跨部門協調會議",
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
                id: 9,
                room: "I會議室",
                status: 1
            }
        },
        {
            id: 19,
            date: "2025/01/08",
            timeStart: "15:00",
            timeEnd: "16:30",
            name: "品質管理會議",
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
        {
            id: 20,
            date: "2025/01/09",
            timeStart: "16:30",
            timeEnd: "18:00",
            name: "週會",
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
        }
    ]
};
