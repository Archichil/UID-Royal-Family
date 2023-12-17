import {membersId} from "./MembersId";

const seededRandom = (seed, n, m) => {
    const x = Math.sin(seed++) * 10000;
    const random = x - Math.floor(x);
    return Math.floor(random * (m - n + 1)) + n;
};

export const getDailyMemberId = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const timeRelativeToMidnight = currentDate.getTime();
    const newIndex = seededRandom(timeRelativeToMidnight, 0, membersId.length - 1);

    return membersId[newIndex];
};