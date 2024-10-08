// Function that simulates a login process and accepts two callbacks: success and failure
function login(username, password, success, failure) {
    // Simulated login logic
    if (username === "admin" && password === "1234") {
        success(); // If login is successful, call the success callback
    } else {
        failure(); // If login fails, call the failure callback
    }
}

// Callback function for a successful login
function loginSuccess() {
    console.log("Login successful! Welcome to the dashboard.");
}

// Callback function for a failed login
function loginFailure() {
    console.log("Login failed! Please check your credentials and try again.");
}

// Example usage: Passing loginSuccess and loginFailure as callback functions
login("admin", "1234", loginSuccess, loginFailure);  // This will trigger loginSuccess
login("user", "wrongpassword", loginSuccess, loginFailure);  // This will trigger loginFailure

// Arrow functions
const double = (n) => n * 2

// Arrow functions can be used to declare callbacks inline
login("user", "wrongpassword", () => console.log("Success!"), () => console.log("Failure!"));  // This will trigger loginFailure
