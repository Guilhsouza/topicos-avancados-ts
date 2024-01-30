"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function renderArticle(articleData) {
    var _a;
    const article = document.createElement('article');
    article.classList.add('article');
    article.id = `article-${articleData.id}`;
    const title = document.createElement('h3');
    title.classList.add('article-title');
    title.textContent = articleData.title;
    const content = document.createElement('div');
    content.classList.add('article-content');
    content.textContent = articleData.content;
    const author = document.createElement('div');
    author.classList.add('article-author');
    author.textContent = articleData.author;
    article.append(title, author, content);
    (_a = document.querySelector('#articles')) === null || _a === void 0 ? void 0 : _a.appendChild(article);
}
const fetchArticles = () => __awaiter(void 0, void 0, void 0, function* () {
    const articles = yield fetch('http://localhost:3000/articles');
    const response = yield articles.json();
    response.forEach(renderArticle);
});
document.addEventListener('DOMContentLoaded', () => {
    fetchArticles();
});
