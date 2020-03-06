fetch('https://v1.hitokoto.cn')
.then(response => response.json())
.then(data => {
  const hitokoto = document.getElementById('hitokoto');
  hitokoto.innerText = data.hitokoto;
})
.catch(err => console.error(err));