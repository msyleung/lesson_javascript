// console.log("hi there");
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); // to prevent browser from automatically saving to backend; refreshing means it's trying to submit the form

    const input = document.querySelector('input');
    console.log(input.value);
})