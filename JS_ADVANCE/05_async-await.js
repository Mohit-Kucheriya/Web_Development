function fetchUserData() {
    return new Promise((resolve, reject) => {
        let success = true;
        setTimeout(() => {
            if (success) {
                resolve({ fName: "Mohit", lName: "Kumar", age: 25 });
            } else {
                reject("Something went wrong");
            }
        }, 3000);
    });
}

async function getUserData() {
    try {
        console.log(`Fetching user data`);
        let getData = await fetchUserData();
        console.log(getData);
        console.log(`User data fetched successfully`);
    } catch (error) {
        console.log(error);
    }
}

getUserData();
