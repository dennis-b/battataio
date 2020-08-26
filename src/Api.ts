const MOCK_DATA = [
    {
        id: 1,
        name: 'General Information',
        data: [
            {
                id: 11,
                title: 'Division Code',
                value: 12345,
                editable: false,
            },
            {
                id: 12,
                title: 'Specification SI Code',
                value: 12345,
                editable: false,
            },
            {
                id: 13,
                title: 'Subcontract Description',
                value: 'Description',
                editable: false,
            },
            {
                id: 14,
                title: 'Subcontract Name',
                value: 'name',
                editable: false,
            },
            {
                id: 15,
                title: 'Age',
                value: 25,
                editable: false,
            },
            {
                id: 16,
                title: 'Author',
                value: 'John Doe',
                editable: false,
            }
        ]
    },
    {
        id: 2,
        name: 'Schedule Impact',
        data: [
            {
                id: 21,
                title: 'Schedule Impact',
                value: 'Yes',
                editable: false,
            },
            {
                id: 22,
                title: 'Number Of Days',
                value: 2,
                editable: true,
            },
            {
                id: 23,
                title: 'Cost of Impact',
                value: '12',
                editable: true,
            },
        ]
    },
    {
        id: 3,
        name: 'Submitted Costs',
        data: [
            {
                id: 31,
                title: 'Submitted Costs',
                value: 123,
                editable: true,
            },
            {
                id: 32,
                title: 'Date Submitted',
                value: '10.10.2020',
                editable: false,
            },
            {
                id: 33,
                title: 'Insurance',
                value: '1ss2',
                editable: false,
            },
        ]
    }
]

export function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(MOCK_DATA), 2000)
    })
}
