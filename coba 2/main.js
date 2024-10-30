const bookForm = document.getElementById('bookForm');
const searchForm = document.getElementById('searchForm');
const incompleteBookshelf = document.getElementById('incompleteBookshelf');
const completeBookshelf = document.getElementById('completeBookshelf');

bookForm.addEventListener('submit', function (e) {
  e.preventDefault();
  addBook();
});

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  searchBook();
});

function addBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const year = document.getElementById('bookYear').value;
  const isComplete = document.getElementById('bookIsComplete').checked;

  const bookItem = document.createElement('div');
  bookItem.classList.add('book-item');
  bookItem.innerHTML = `
    <span>${title} by ${author} (${year})</span>
    <button onclick="toggleBookStatus(this, ${isComplete})">${isComplete ? 'Belum Selesai' : 'Selesai'}</button>
    <button onclick="deleteBook(this)">Hapus</button>
  `;

  if (isComplete) {
    completeBookshelf.appendChild(bookItem);
  } else {
    incompleteBookshelf.appendChild(bookItem);
  }

  bookForm.reset();
}

function toggleBookStatus(button, isComplete) {
  const bookItem = button.parentElement;
  button.textContent = isComplete ? 'Selesai' : 'Belum Selesai';
  if (isComplete) {
    incompleteBookshelf.appendChild(bookItem);
  } else {
    completeBookshelf.appendChild(bookItem);
  }
}

function deleteBook(button) {
  const bookItem = button.parentElement;
  bookItem.remove();
}

function searchBook() {
  const searchTitle = document.getElementById('searchTitle').value.toLowerCase();
  const books = document.querySelectorAll('.book-item');
  
  books.forEach(book => {
    const bookText = book.textContent.toLowerCase();
    book.style.display = bookText.includes(searchTitle) ? 'flex' : 'none';
  });
}