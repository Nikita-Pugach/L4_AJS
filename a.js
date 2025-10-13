// Функция для загрузки данных по URL
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }
  return await response.json();
}

// Получение и сортировка постов по длине заголовка (от длинных к коротким)
async function getSortedPosts() {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  return posts.sort((a, b) => b.title.length - a.title.length);
}

// Получение и сортировка комментариев по имени (алфавитно)
async function getSortedComments() {
  const comments = await fetchData("https://jsonplaceholder.typicode.com/comments");
  return comments.sort((a, b) => a.name.localeCompare(b.name));
}

// Запуск
(async () => {
  try {
    const posts = await getSortedPosts();
    console.log("Топ-5 постов:");
    console.log(posts.slice(0, 5));

    const comments = await getSortedComments();
    console.log("Топ-5 комментариев:");
    console.log(comments.slice(0, 5));
  } catch (err) {
    console.error("Ошибка выполнения:", err);
  }
})();
