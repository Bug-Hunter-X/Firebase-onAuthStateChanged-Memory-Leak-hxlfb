# Firebase onAuthStateChanged Memory Leak
This repository demonstrates a common error when using Firebase's `onAuthStateChanged` method: forgetting to unsubscribe.  This can lead to memory leaks, particularly in React applications where components mount and unmount frequently.

## Bug
The `authBug.js` file shows the incorrect implementation where the unsubscribe function is never called, resulting in a persistent listener even after the component is unmounted. 

## Solution
The `authBugSolution.js` file provides the correct implementation. The `unsubscribe` function is called to cleanly remove the listener and prevent memory leaks.

## How to reproduce
1.  Clone this repository.
2.  Install Firebase: `npm install firebase`
3.  Configure your Firebase project and replace the placeholder in the code with your config.
4. Run both files to compare the differences. Observe that the solution file doesn't trigger any error.