const createUser = (userData) => {
    // container
    const container = document.createElement('div');
    container.className = 'user-card';

    // user info
    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';

    // name
    const name = document.createElement('h2');
    name.className = 'name';
    name.innerText = userData.name;

    // userName
    const userName = document.createElement('p');
    userName.className = 'username';
    userName.innerText = userData.username;

    // email
    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = userData.email;

    // phone
    const phone = document.createElement('p');
    phone.className = 'phone';
    phone.innerText = userData.phone;

    // website
    const website = document.createElement('p');
    website.className = 'website';
    website.innerHTML = `<a href="http://${userData.website}">${userData.website}</a>`;

    userInfo.append(name, userName, email, phone, website);

    container.append(userInfo);

    return container;
};

export default createUser;
