/**
 * 주어진 배열을 무작위로 섞는 함수.
 * @param {Array} array - 섞을 배열.
 * @returns {Array} 무작위로 섞인 배열.
 */
function shuffleArray(array) {
  /**
   * 주어진 최대값 내에서 무작위 인덱스를 반환하는 함수.
   * @param {number} max - 무작위 인덱스를 생성할 때 고려할 최대 범위.
   * @returns {number} 생성된 무작위 인덱스.
   */
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  array.forEach((currentValue, index) => {
    const randomIndex = getRandomIndex(array.length);
    const temp = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = temp;
  });

  return array;
}

const shuffledArray = shuffleArray(studentList);

/**
 * 주어진 배열을 팀으로 나누는 함수
 *
 * @param {Array} array - 팀으로 나눌 배열
 * @returns {Array} 팀으로 나눈 배열
 */
function createTeams(array) {
  const shuffled = shuffleArray(array);
  const teamSize = 4;
  const teams = shuffled.reduce((acc, current, index) => {
    if (index % teamSize === 0 && shuffled.length - index > teamSize)
      acc.push([]);
    acc[acc.length - 1].push(current);
    return acc;
  }, []);

  const lastTeam = teams[teams.length - 1];
  if (lastTeam.length < 5 && teams.length > 1) {
    lastTeam.unshift(teams[teams.length - 2].pop());
  }

  teams.forEach((team) => {
    if (team.length > 0) {
      team[0] = '팀장-' + team[0];
    }
  });

  return teams;
}
