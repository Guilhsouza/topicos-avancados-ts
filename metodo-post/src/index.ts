interface articleObject {
    id: number,
    title: string,
    content: string,
    author: string
}

function renderArticle(articleData: articleObject) {
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`

    const title = document.createElement('h3')
    title.classList.add('article-title')
    title.textContent = articleData.title

    const content = document.createElement('div')
    content.classList.add('article-content')
    content.textContent = articleData.content

    const author = document.createElement('div')
    author.classList.add('article-author')
    author.textContent = articleData.author

    article.append(title, author, content)
    document.querySelector('#articles')?.appendChild(article)
}

const fetchArticles = async () => {
    const articles = await fetch('http://localhost:3000/articles')

    const response = await articles.json()

    response.forEach(renderArticle)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchArticles()
})

const form = document.querySelector('form')

form?.addEventListener('submit', async (ev: Event) => {
    ev.preventDefault()

    const articleData = {
        title: (document?.querySelector('#title') as HTMLInputElement).value,
        author: (document?.querySelector('#author') as HTMLInputElement).value,
        content: (document?.querySelector('#content') as HTMLInputElement).value
    }

    const response = await fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleData)
    })

    const savedArticle = await response.json()
    form.reset()
    renderArticle(savedArticle)

    console.log(savedArticle)
})