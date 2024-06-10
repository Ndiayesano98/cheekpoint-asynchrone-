async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function waitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
}

async function waitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
}

async function concurrentRequests() {
    try {
        const [result1, result2] = await Promise.all([
            fetch('https://api.example.com/data1'),
            fetch('https://api.example.com/data2')
        ]);

        const data1 = await result1.json();
        const data2 = await result2.json();

        console.log(data1, data2);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
}

async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        console.log(data);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
}
