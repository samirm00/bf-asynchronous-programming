import dom from '../dom.js';
import getUserHandler from '../handlers/getUserHandler.js';

const getUserEvent = () => {
    dom.btn.addEventListener('click', (e) => {
        getUserHandler(e);
    });
};

export default getUserEvent;
