async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);

const inactivityTime =()=> {
  let time;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  document.onclick = resetTimer;

  function handleLogout() {
    logout();
    alert("Your were logged out due to inactivity!");
  }

  function resetTimer() {
      clearTimeout(time);
      time = setTimeout(handleLogout, 8000)
      // 1000 milliseconds = 1 second
  }
};

window.onload = function() {
  inactivityTime();
};
