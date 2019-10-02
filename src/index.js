/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus = 'family', knowsProgramming = true, config = {family: 4}) {
      for (let [key, value] of Object.entries(config)) {
        if (focus == key) {
          weeks = value
        }
      }
        if(knowsProgramming){
          weeks = 800/weeks;
        }else {
          weeks = 1300/weeks;
        }
      weeks = Math.ceil(weeks);
      return weeks;
};
  