// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const scanBtn = document.querySelector('.scan-btn');
    const borrowBtn = document.querySelector('.borrow-action-btn');
    const rfidText = document.querySelector('.rfid-input-sim span');
    const profile = document.querySelector('.student-profile-mini');

    // 1. Simulate RFID Scanning
    scanBtn.addEventListener('click', () => {
        scanBtn.textContent = "READING...";
        rfidText.textContent = "Scanning Card...";
        
        setTimeout(() => {
            rfidText.textContent = "RFID_STUDENT_2025_001";
            scanBtn.textContent = "SUCCESS";
            scanBtn.style.background = "#22c55e"; // Turn green
            profile.style.border = "2px solid #38bdf8"; // Highlight profile
            alert("Student Identified: Billy Rodriguez");
        }, 1500);
    });

    // 2. Simulate Processing Transaction
    borrowBtn.addEventListener('click', () => {
        const book = document.getElementById('book-dropdown').value;
        borrowBtn.textContent = "UPDATING DATABASE...";
        
        setTimeout(() => {
            alert(`Success! "${book}" has been borrowed by Billy Rodriguez.`);
            borrowBtn.textContent = "Process Transaction";
        }, 1000);
    });
});