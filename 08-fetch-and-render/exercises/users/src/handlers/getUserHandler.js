import getUserById from '../../apis/getUserById.js';
import createUser from '../components/createUser.js';
import updateUser from '../components/updateUser.js';
import dom from '../dom.js';
import data from '../data.js';

const getUserHandler = async (e) => {
    e.preventDefault();

    const value = dom.input.value;
    // if no value
    if (!value) {
        dom.error.innerText = 'Please enter a user id';
        dom.error.classList.add('error');
        dom.root.classList.add('hide');
        data.id = null;
        return;
    }

    const id = Number(value);
    if (data.id === id) {
        return;
    }

    // check if the value is valid id
    if (Number.isNaN(id) || id <= 0 || id >= 11) {
        dom.error.innerText = 'Please enter a valid id';
        dom.error.classList.add('error');
        dom.root.classList.add('hide');
        data.id = null;
        return;
    }

    // remove error message if exist
    if (dom.error.innerText !== '') {
        dom.error.innerText = '';
        dom.error.classList.remove('error');
        dom.root.classList.remove('hide');
    }

    const userData = await getUserById(id);
    const userExist = document.querySelector('.user-card');

    if (userData) {
        if (!userExist) {
            const userDom = createUser(userData);
            dom.root.append(userDom);
        } else {
            updateUser(userExist, userData);
        }
    } else {
        if (userExist) {
            userExist.remove();
        }
        dom.error.innerText = 'something went wrong!';
        dom.error.classList.add('error');
        dom.root.classList.add('hide');
    }

    data.id = id;
};

export default getUserHandler;
