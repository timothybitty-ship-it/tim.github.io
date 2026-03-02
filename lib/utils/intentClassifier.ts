// intentClassifier.ts

class IntentClassifier {
    private keywordIntentMap: { [keyword: string]: string };

    constructor() {
        this.keywordIntentMap = {
            'hello': 'greet',
            'bye': 'farewell',
            'help': 'assist',
            'order': 'placeOrder',
            'status': 'checkStatus',
            // Add more keywords and their corresponding intents here
        };
    }

    public classifyIntent(userInput: string): string {
        const lowerCasedInput = userInput.toLowerCase();
        for (const keyword in this.keywordIntentMap) {
            if (lowerCasedInput.includes(keyword)) {
                return this.keywordIntentMap[keyword];
            }
        }
        return 'unknown'; // Default return for unrecognized intents
    }

    public mapIntentToRoute(intent: string): string {
        const routeMap: { [intent: string]: string } = {
            'greet': '/greet',
            'farewell': '/farewell',
            'assist': '/help',
            'placeOrder': '/order',
            'checkStatus': '/status',
            // Add more intents and their corresponding routes here
        };

        return routeMap[intent] || '/'; // Default route
    }
}

export default IntentClassifier;