const updateUser = (userDom, userData) => {
    userDom.querySelector('.name').innerText = userData.name;
    userDom.querySelector('.username').innerText = userData.username;
    userDom.querySelector('.email').innerText = userData.email;
    userDom.querySelector('.phone').innerText = userData.phone;
    userDom.querySelector(
        '.website',
    ).innerHTML = `<a href="http://${userData.website}">${userData.website}</a>`;
};

export default updateUser;
