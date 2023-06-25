function compareArrays(arr1, arr2) {
    if (arr1.length !==arr2.length){
        return false;
    }
  return arr2.every((item,index)=> item ===arr1[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const usersByGender = users.filter((user)=>user.gender === gender);
    const userAge = usersByGender.map((user)=>user.age);
    const totalAge =userAge.reduce((acc,age)=>acc + age, 0);
    if (userAge.length ===0){
        return 0;
    }
  return totalAge/userAge.length
}