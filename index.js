const quotes = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas consequuntur ex unde quasi iusto! Veniam, nesciunt animi excepturi cupiditate natus eos possimus adipisci nulla nemo laudantium facere, odit harum consequatur."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while(true) {
    const randomIdx = Math.floor(Math.random() * quotes.length)

    if (usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
 }
}