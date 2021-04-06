export const defaults = {
    name: null,
    flexSize: 1,
    forDirectCount: 12550,
    forCount: 36550,
    againstDirectCount: 5370,
    againstCount: 13440,
    userVote: null,
    userDelegatedVotes: null
};

export const byLocation = [
    {
        ...defaults,
        name: "Lisbon",
        flexSize: 5,
        forCount: 24550,
        againstCount: 8440,
    },
    {
        ...defaults,
        name: "London",
        flexSize: 4,
        forCount: 10550,
        againstCount: 1440,
    },
    {
        ...defaults,
        name: "Other",
        // forPercentage: 50,
        flexSize: 1,
        forCount: 550,
        againstCount: 940,
    }
];

export const byAge = [
    {
        ...defaults,
        name: "10-18",
        flexSize: 3,
        forCount: 7550,
        againstCount: 1040,
    },
    {
        ...defaults,
        name: "19-25",
        flexSize: 4,
        forCount: 5550,
        againstCount: 1440,
    },
    {
        ...defaults,
        name: "26-35",
        // forPercentage: 70,
        flexSize: 3,
        forCount: 3550,
        againstCount: 440,
    },
    {
        ...defaults,
        name: "36-50",
        // forPercentage: 60,
        flexSize: 3,
        forCount: 1550,
        againstCount: 2440,
    },
    {
        ...defaults,
        name: "Other",
        // forPercentage: 50,
        flexSize: 1,
        forCount: 350,
        againstCount: 540,
    }
];

export const byOccupation = [
    {
        ...defaults,
        name: "Student",
        flexSize: 5,
        // forPercentage: 90
    },
    {
        ...defaults,
        name: "Sales",
        flexSize: 4,
        // forPercentage: 50,
        userVote: null
    },
    {
        ...defaults,
        name: "Doctor",
        flexSize: 3,
        // forPercentage: 70,
        userVote: null
    },
    {
        ...defaults,
        name: "IT",
        flexSize: 3,
        // forPercentage: 90,
        userVote: null
    },
    {
        ...defaults,
        name: "Lobbyist",
        flexSize: 2,
        // forPercentage: 20,
        userVote: null
    },
    {
        ...defaults,
        name: "Other",
        // forPercentage: 50,
        flexSize: 1,
        userVote: null
    }
];

export const byApprovalOnOtherTopics = [
    {
        ...defaults,
        name: "Equality",
        flexSize: 7,
        // forPercentage: 70,
        // forPercentageOnOther: 90,
        userVote: true
    },
    {
        ...defaults,
        name: "BLM",
        flexSize: 5,
        // forPercentage: 60,
        // forPercentageOnOther: 50,
        userVote: true
    },
    {
        ...defaults,
        name: "LGBT Rights",
        // forPercentage: 90,
        flexSize: 3,
        // forPercentageOnOther: 40,
        userVote: true
    },
    {
        ...defaults,
        name: "Other",
        // forPercentage: 50,
        flexSize: 1
    }
];

export const votesBy = [
    {
        ...defaults,
        name: "Direct",
        // forPercentage: 70,
        flexSize: 12,
        userVote: null
    },
    {
        ...defaults,
        name: "Joe Bidden",
        flexSize: 7,
        // forPercentage: 100,
        userVote: null
    },
    {
        ...defaults,
        name: "Trump",
        flexSize: 4,
        // forPercentage: 0,
        userVote: null
    },
    {
        ...defaults,
        name: "Bonno",
        // forPercentage: 100,
        flexSize: 3,
        userVote: null
    }
];

export const onSubTopics = [
    {
        ...defaults,
        name: "Equal Rights amoung Genders",
        flexSize: 8,
        // forPercentage: 90,
        // forPercentageOnOther: 70,
        userVote: true
    },
    {
        ...defaults,
        name: "Equal Rights accross all Ages",
        flexSize: 4,
        // forPercentage: 60,
        // forPercentageOnOther: 50,
        userVote: true
    },
    {
        ...defaults,
        name: "Equal Rights for rapists",
        flexSize: 4,
        // forPercentage: 60,
        // forPercentageOnOther: 50,
        userVote: true
    },
    {
        ...defaults,
        name: "Equal Rights including demoniac ones",
        flexSize: 4,
        // forPercentage: 60,
        // forPercentageOnOther: 50,
        userVote: true
    },
    {
        ...defaults,
        name: "Equal Rights excluding demoniac ones",
        flexSize: 4,
        // forPercentage: 60,
        // forPercentageOnOther: 50,
        userVote: true
    }
];

export const profileVotes = [
    {
        ...defaults,
        name: "Equality",
        flexSize: 7,
        forPercentage: 70
        // forPercentageOnOther: 90
    },
    {
        ...defaults,
        name: "BLM",
        flexSize: 5,
        forPercentage: 60
        // forPercentageOnOther: 50
    },
    {
        ...defaults,
        name: "LGBT Rights",
        forPercentage: 90,
        flexSize: 3
        // forPercentageOnOther: 40
    },
    {
        ...defaults,
        name: "Libertarianism",
        forPercentage: 40,
        flexSize: 1,
        userVote: false
    },
    {
        ...defaults,
        name: "Mercantilism",
        forPercentage: 30,
        flexSize: 1,
        userVote: false
    }
];

export const feedNotificationVotes = [
    {
        ...defaults,
        who: {
            name: 'Dan Price',
            handle: '@DanPriceSeattle',
            avatar: '',
            representsYou: true
        },
        message:"Voted 'For' on",
        name: "Equality",
    },
    {
        ...defaults,

        name: "BLM",
        who: {
            name: 'Dan Price',
            handle: '@DanPriceSeattle',
            avatar: '',
            representsYou: false
        },
        message:"Launched Opinion Poll and Voted 'For' on",
    },
    {
        ...defaults,
        name: "LGBT Rights",
        forPercentage: 90,
        flexSize: 3,
        who: {
            name: 'Dan Price',
            handle: '@DanPriceSeattle',
            avatar: '',
            representsYou: true
        },
        message:"Voted 'For' on",
    },
    {
        ...defaults,
        name: "Libertarianism",
        forPercentage: 40,
        who: {
            name: 'Dan Price',
            handle: '@DanPriceSeattle',
            avatar: '',
            representsYou: false
        },
        message:"Voted 'Against' on",
    },
    {
        ...defaults,
        name: "Mercantilism",
        who: {
            name: 'Dan Price',
            handle: '@DanPriceSeattle',
            avatar: '',
            representsYou: true
        },
        message:"Voted 'Against' on",
    }
];