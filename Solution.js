// Output:
// A
// D
// C
// B

// Execution Order Explanation:
//
// 1. console.log("A") is synchronous, so A is printed first.
//
// 2. setTimeout(..., 0) is sent to the Web API/Timer queue.
//    It will execute after the synchronous code and microtasks.
//
// 3. Promise.resolve().then(...) creates a microtask.
//    Promise microtasks have higher priority than timer callbacks.
//
// 4. console.log("D") is synchronous, so D is printed next.
//
// 5. After all synchronous code finishes, the Promise microtask runs.
//    Therefore, C is printed.
//
// 6. Finally, the setTimeout callback runs.
//    Therefore, B is printed.
//
// Final Output: A D C B