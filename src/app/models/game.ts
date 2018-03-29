


export class Game {
    MyQuotes: string[] = [
        "Great minds think alike, but ...",
        "Axis of Evil",
        "There are two extremes"
    ];
    Players: User[] = [
        { Name: 'Moshe Plotkin' },
        { Name: 'Donald Trump' },
        { Name: 'Barak Obama' },        
    ];
    Dealer: string = "Moshe Plotkin";
    Picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1080-600.jpg';
    PlayedQuotes: Quote[] = [
        { Text: "That's fake news", PlayerName: 'Donald Trump', Chosen: false }
    ];
}

export class User {
    Name: string;
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}