document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio của Nguyễn Phúc Đức đã tải xong!');
  // Hiển thị lời chào nhẹ nhàng, không làm gián đoạn khi mở website.
  const welcome = document.querySelector('[data-welcome]');
  if (welcome) welcome.textContent = 'Chào mừng bạn đến với portfolio của mình!';
});
