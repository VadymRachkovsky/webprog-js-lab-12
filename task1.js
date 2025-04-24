// task1.js
async function fetchNumber() {
    return new Promise(resolve => {
      setTimeout(() => resolve(42), 2000);
    });
  }
  
  async function getNumber() {
    try {
      const num = await fetchNumber();
      console.log("Число:", num);
    } catch (err) {
      console.error("Помилка при отриманні числа:", err);
    }
  }
  
  getNumber();
  