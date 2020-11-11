import UserInfo from './../src/js/userInfo.js';

describe('UserInfo', () => {

  let userInstance;

  beforeEach(() => {
    userInstance = new UserInfo ('Tyler');
  });

  test('should show how beforeEach() works', ()=>{
    console.log(userInstance);
  });

  test('should make an instance of a user', () => {
    
    expect(userInstance.name).toEqual('Tyler');
    expect(userInstance.diceRoll).toEqual(0);
    expect(userInstance.turntotal).toEqual(0);
    expect(userInstance.total).toEqual(0);
  });

  test('should return a random number from 1-6', () => {
    userInstance.diceRolls();
    const thisDiceRoll = userInstance.diceRoll;  
    expect(thisDiceRoll).toBeLessThanOrEqual(6);
    expect(thisDiceRoll).toBeGreaterThanOrEqual(1);
  });

  test('should return the turn total', () => {
    userInstance.turntotal = 5
    userInstance.totals();
    const thisTotal = userInstance.total;
    expect(thisTotal).toEqual(5);
  });

  test('should return a 0 when a 1 is rolled', () => {
    userInstance.diceRoll = 1;
    userInstance.turnTotals();
    expect(userInstance.turntotal).toEqual(0);
  });

  test('should add diceRoll to turntotal if diceRoll is greater than 1', () => {
    userInstance.diceRoll = 5;
    userInstance.turnTotals();
    expect(userInstance.turntotal).toEqual(5);
  });
});

