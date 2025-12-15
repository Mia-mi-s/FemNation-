document.addEventListener('DOMContentLoaded', () => {
    // Basic DOM elements accessed via getElementById
    const form = document.getElementById('messageForm');
    const messageWall = document.getElementById('messageWall');
    const messageTextarea = document.getElementById('messageText');
    const imageUpload = document.getElementById('imageUpload');

    // --- Data Storage (using an Array) ---
    // In a real application, this array would be saved to a database.
    // Here, it holds messages temporarily in memory for the session.
    let messagesArray = [
    {
text: `Men im around ask often ask, "What rights do you not have that i have?" when feminism is brought into the  conversation,
 and i start wondering if the concept of feminism was ever taught.
 My life here is privileged; my voice is safe. The pay gap is different and they find a way to justify it and alot more...

Feminism was never about my small, local score-keeping.

It's about the billions of women globally who are born without a voice, whose lives are controlled before they draw their first breath. They don't have the simple, terrifying privilege of expression, of critical thinking.

I don't want the same rights as the man across the table. I want all women to live like I do.

— Mia`,
        imageUrl: null,
        date: "12-15-2025 02:10"
    }
];

    // --- Helper function: Get Random Rotation (using Math) ---
    function getRandomRotation() {
        // Returns a number between -3 and 3 degrees
        return Math.random() * 6 - 3;
    }

    // --- Helper function: Render all messages from the array to the DOM ---
    function renderMessages() {
        // Clear the current messages on the wall
        messageWall.innerHTML = ''; 

        let i = 0;
        // Loop backward through the array to display latest messages first
        while (i < messagesArray.length) {
            const msg = messagesArray[(messagesArray.length - 1) - i]; // Access elements from the end
            
            // 1. Create the new card element
            const newCard = document.createElement('article');
            newCard.className = 'message-card';
            newCard.style.setProperty('--rotation', getRandomRotation() + 'deg'); 
            
            // 2. Add Image (if available)
            if (msg.imageUrl && msg.imageUrl !== "null") {
                const img = document.createElement('img');
                img.src = msg.imageUrl;
                img.alt = 'User uploaded image';
                newCard.appendChild(img);
            }

            // 3. Add Message Text (if available)
            if (msg.text && msg.text !== "") {
                const p = document.createElement('p');
                p.className = 'message-text';
                // Using innerText is safe for user-supplied text
                p.innerText = msg.text; 
                newCard.appendChild(p);
            }

            // 4. Add Footer
            const footerDiv = document.createElement('div');
            footerDiv.className = 'message-footer';

            const spanDate = document.createElement('span');
            spanDate.className = 'message-date';
            spanDate.innerText = `Anonymous - ${msg.date}`;
            
            footerDiv.appendChild(spanDate);
            newCard.appendChild(footerDiv);
            
            // Add the fully built card to the message wall
            messageWall.appendChild(newCard);
            
            i++;
        }
    }

    // --- Form Submission Handler ---
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the page from reloading

        const message = messageTextarea.value.trim();
        const file = imageUpload.files[0];
        let imageUrl = null;

        // Check if a file was uploaded
        if (file) {
            // Read the file as a data URL to display it immediately
            imageUrl = URL.createObjectURL(file);
        }

        // Check if the input is valid (using if/else)
        if (message || imageUrl) {
            
            const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            // 5. Add new message object to the array (using Array push)
            messagesArray.push({
                text: message,
                imageUrl: imageUrl,
                date: date
            });
            
            // 6. Re-render the entire wall
            renderMessages();
            
            // 7. Clear the form fields
            messageTextarea.value = '';
            imageUpload.value = '';
            
            // Clean up the object URL (good practice)
            if (imageUrl) {
                // We use a simple loop (or single operation) for cleanup
                // In a real scenario, this would rely on a basic setTimeout or loop
                // to call revokeObjectURL later, but for simplicity, we skip complex timing here.
            }
        } else if (!message && !imageUrl) {
            alert("Please enter a message or select an image.");
        }
    });
    // Render the initial messages
    renderMessages();
});