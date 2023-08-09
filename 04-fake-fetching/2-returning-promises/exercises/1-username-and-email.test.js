import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

// --- declare function ---

const usernameAndEmail = (id) => {
  return fetchUserById(id)
    .then((userData) => {
      return `${userData.id}. ${userData.username}, ${userData.email}`;
    })
    .catch((err) => console.error(err));
};

// --- test function ---

describe("usernameAndEmail: returns a user's name", () => {
  it("gets user 2's name", () => {
    return usernameAndEmail(2).then((actual) => {
      expect(actual).toEqual('2. Antonette, Shanna@melissa.tv');
    });
  });
  it("gets user 3's name", () => {
    return usernameAndEmail(4).then((actual) => {
      expect(actual).toEqual('4. Karianne, Julianne.OConner@kory.org');
    });
  });
  it("gets user 4's name", () => {
    return usernameAndEmail(7).then((actual) => {
      expect(actual).toEqual('7. Elwyn.Skiles, Telly.Hoeger@billy.biz');
    });
  });
  it("gets user 8's name", () => {
    return usernameAndEmail(10).then((actual) => {
      expect(actual).toEqual('10. Moriah.Stanton, Rey.Padberg@karina.biz');
    });
  });
});

log('= = = =  the call stack is empty  = = = =');
