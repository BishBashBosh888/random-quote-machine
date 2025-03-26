import { useState } from "react";

const quotes = [
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
    { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" }
];

const QuoteBox = () => {
    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
    const [isFading, setIsFading] = useState(false);

    const generateRandomQuote = () => {
        if(isFading){
            return;
        }

        let randomIndex;
        let newQuote;

        //prevent displaying duplicate quote
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
            newQuote = quotes[randomIndex];
        } while (newQuote.quote === quote.quote);

        setIsFading(true);

        setTimeout(() => {
            setQuote(newQuote);
            setIsFading(false);
        }, 750);
    };

    return (
        <div className="flex flex-col rounded-lg bg-white w-1/4 h-1/4 p-10" id="quote-box">
            <div className="flex text-center items-center justify-center h-1/2">
                <p
                    className={`text-2xl quote ${isFading ? "fade-out" : "fade-in"}`}
                    id="text"
                >
                    {quote.quote}
                </p>
            </div>
            <div className="flex justify-end">
                <p
                    className={`text-xl ${isFading ? "fade-out" : "fade-in"}`}
                    id="author"
                >
                    -{quote.author}
                </p>
            </div>
            <div className="flex flex-row justify-between mt-auto" id="buttons">
                <a id="github" href="https://github.com/BishBashBosh888">
                    <button className="bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-700 transition cursor-pointer">
                        <i className="fab fa-github text-3xl"></i>
                    </button>
                </a>
                <button
                    className="bg-sky-500 text-white text-xl px-4 py-2 rounded-lg hover:bg-sky-700 transition cursor-pointer"
                    id="new-quote"
                    onClick={generateRandomQuote}
                >
                    New Quote
                </button>
            </div>
        </div>
    );
};

export default QuoteBox;