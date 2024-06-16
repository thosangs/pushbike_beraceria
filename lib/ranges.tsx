// lib/ranges.js
type Dictionary = {
    [year: string]: {
        [type: string]: {
            [stage: string]: string;
        };
    };
};

const ranges: Dictionary = {
    '2021': {
        'mix': {
            'Batch 1': '2021 (Simulasi)!I3:P9',
            'Batch 2': '2021 (Simulasi)!I11:P17',
            'Batch 3': '2021 (Simulasi)!I19:P25',
            'Batch 4': '2021 (Simulasi)!I27:P33',
            'Semifinal 1': '2021 (Simulasi)!R3:T9',
            'Semifinal 2': '2021 (Simulasi)!R11:T17',
            'Final Novice (Sementara)': '2021 (Simulasi)!R19:T25',
            'Final Utama (Sementara)': '2021 (Simulasi)!R27:T33',
        }
    },
    '2020': {
        'boy': {
            'Batch 1': '2020 (Simulasi)!I3:P9',
            'Batch 2': '2020 (Simulasi)!I11:P17',
            'Batch 3': '2020 (Simulasi)!I19:P25',
            'Semifinal 1 (Sementara)': '2020 (Simulasi)!R3:T9',
            'Semifinal 2 (Sementara)': '2020 (Simulasi)!R11:T17',
            'Final Novice (Sementara)': '2020 (Simulasi)!R19:T25',
            'Final Utama (Sementara)': '2020 (Simulasi)!R27:T33',
        },
        'girl': {
            'Batch 1': '2020 (Simulasi)!I36:P42',
            'Batch 2': '2020 (Simulasi)!I44:P50',
            'Batch 3': '2020 (Simulasi)!I52:P58',
            'Semifinal 1 (Sementara)': '2020 (Simulasi)!R36:T42',
            'Semifinal 2 (Sementara)': '2020 (Simulasi)!R44:T50',
            'Final Novice (Sementara)': '2020 (Simulasi)!R52:T58',
            'Final Utama (Sementara)': '2020 (Simulasi)!R60:T66',
        }
    },
    '2019': {
        'boy': {
            'Batch 1': '2019 (Simulasi)!I3:P9',
            'Batch 2': '2019 (Simulasi)!I11:P17',
            'Batch 3': '2019 (Simulasi)!I19:P25',
            'Semifinal 1 (Sementara)': '2019 (Simulasi)!R3:T9',
            'Semifinal 2 (Sementara)': '2019 (Simulasi)!R11:T17',
            'Final Novice (Sementara)': '2019 (Simulasi)!R19:T25',
            'Final Utama (Sementara)': '2019 (Simulasi)!R27:T33',
        },
        'girl': {
            'Batch 1': '2019 (Simulasi)!I36:P42',
            'Batch 2': '2019 (Simulasi)!I44:P50',
            'Final Novice (Sementara)': '2019 (Simulasi)!R36:T42',
            'Final Utama (Sementara)': '2019 (Simulasi)!R44:T50',
        }
    },
    '2018': {
        'boy': {
            'Final': '2018 (Simulasi)!I3:R9'
        },
        'girl': {
            'Final': '2018 (Simulasi)!I12:R18'
        },
    },
    '2017': {
        'boy': {
            'Final': '2017 (Simulasi)!I3:R9'
        },
    },
    'ffa': {
        'boy': {
            'Batch 1': 'FFA (Simulasi)!I3:P9',
            'Batch 2': 'FFA (Simulasi)!I11:P17',
            'Batch 3': 'FFA (Simulasi)!I19:P25',
            'Semifinal 1 (Sementara)': 'FFA (Simulasi)!R3:T9',
            'Semifinal 2 (Sementara)': 'FFA (Simulasi)!R11:T17',
            'Final Utama (Sementara)': 'FFA (Simulasi)!R19:T25',
        },
        'girl': {
            'Batch 1': 'FFA (Simulasi)!I29:P35',
            'Batch 2': 'FFA (Simulasi)!I37:P43',
            'Final Utama (Sementara)': 'FFA (Simulasi)!R29:T35',
        },
    },
};

export default ranges;
