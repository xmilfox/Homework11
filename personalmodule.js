let currentDate = new Date();
export const date = currentDate;

export function getMessage(name){
    let hour = currentDate.getHours();
    if(hour > 16) {
        return "Good evening,  " + name;
    } else if (hour > 10){
        return "Good afternoon, " + name;
    } else {
        return "Good morning, " + name;
    }
}