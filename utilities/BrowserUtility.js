export class BrowserUtility {

    static async sleep(seconds){
        await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    }

    // create a new function that can verify actual and expected messages are equal use promises
     static async verifyExpectedMessages(actual, expected) {
        return new Promise((resolve) => {
                resolve(expected.toString() === actual.toString());
        });
    }
     
     


    // ADD YOUR OWN BROWSER UTILITY FUNCTIONS HERE...
    

}