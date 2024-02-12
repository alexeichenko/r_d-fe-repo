// Створюємо функцію-конструктор
function LocalStorageManager() {}

// Додаємо метод для збереження даних у прототип функції
LocalStorageManager.prototype.saveData = function(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  console.log(`Дані з ключем ${key} збережено в localStorage.`);
};

// Додаємо метод для отримання даних із прототипу функції
LocalStorageManager.prototype.getData = function(key) {
  var storedData = localStorage.getItem(key);
  if (storedData) {
    var parsedData = JSON.parse(storedData);
    console.log(`Дані з ключем ${key} отримано з localStorage:`, parsedData);
    return parsedData;
  } else {
    console.log(`Дані з ключем ${key} не знайдено в localStorage.`);
    return null;
  }
};

// Створюємо новий екземпляр LocalStorageManager
var localStorageManager = new LocalStorageManager();

// Зберігаємо деякі дані
localStorageManager.saveData('user', { name: 'Alice', age: 30 });

// Отримуємо дані, які ми зберегли
var userData = localStorageManager.getData('user');

// Перевіряємо, чи дані були збережені та отримані правильно
if (userData && userData.name === 'Alice' && userData.age === 30) {
  console.log('Тест пройдено успішно: дані збережено та отримано правильно.');
} else {
  console.error('Тест не пройдено: щось пішло не так з збереженням або отриманням даних.');
}

console.log(userData);