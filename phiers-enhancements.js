// PHIERS Website Enhancements
// Version 2.0 - Feb 6, 2026

// ============================================================================
// OPENING MODAL WITH TEETH GRAPHIC
// Shows on index.html only, once per session
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Only show modal on homepage (index.html)
    const isHomepage = window.location.pathname === '/' || 
                       window.location.pathname.endsWith('index.html') ||
                       window.location.pathname === '/PHIERdUP/' ||
                       window.location.pathname === '/PHIERdUP/index.html';
    
    if (!isHomepage) return;
    
    // Check if modal has been shown this session
    if (sessionStorage.getItem('phiersModalShown')) return;
    
    // Create modal HTML
    const modalHTML = `
        <div id="phiersModal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease-in;
        ">
            <div style="
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                border: 3px solid #4caf50;
                border-radius: 12px;
                padding: 40px;
                max-width: 800px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                box-shadow: 0 0 50px rgba(76, 175, 80, 0.5);
            ">
                <button id="closeModal" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: transparent;
                    border: 2px solid #4caf50;
                    color: #4caf50;
                    font-size: 24px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s;
                ">&times;</button>
                
                <!-- TEETH GRAPHIC -->
                <img src="Power_Concedes_Nothing_TEETH.png" 
                     alt="Power Concedes Nothing Without A Demand That Has Teeth - We Are The TEETH"
                     style="
                        width: 100%;
                        max-width: 700px;
                        margin: 0 auto 30px;
                        display: block;
                        border-radius: 8px;
                        box-shadow: 0 0 30px rgba(76, 175, 80, 0.3);
                     ">
                
                <h2 style="
                    color: #4caf50;
                    text-align: center;
                    margin-bottom: 20px;
                    font-size: 1.8em;
                ">Congress Refuses to Do Their Jobs. We're Forcing Them — Or Replacing Them.</h2>
                
                <p style="
                    color: #c8e6c9;
                    text-align: center;
                    font-size: 1.1em;
                    line-height: 1.6;
                    margin-bottom: 30px;
                ">
                    234 million Americans deserve guaranteed healthcare, economic stability, and a government that works for them. 
                    We have the solution. We have the leverage. We have 50 days to March 28, 2026.
                </p>
                
                <div style="text-align: center; margin-bottom: 20px;">
                    <a href="action.html" style="
                        background: linear-gradient(135deg, #2196f3, #1976d2);
                        color: white;
                        padding: 16px 40px;
                        font-size: 1.2em;
                        font-weight: bold;
                        text-decoration: none;
                        border-radius: 8px;
                        display: inline-block;
                        box-shadow: 0 4px 15px rgba(33, 150, 243, 0.4);
                        transition: all 0.3s;
                    ">✏️ Sign the Petition</a>
                </div>
                
                <p style="
                    color: #81c784;
                    text-align: center;
                    font-size: 0.95em;
                    margin-top: 25px;
                ">
                    <a href="#" id="skipModal" style="color: #4caf50; text-decoration: underline;">Continue to site →</a>
                </p>
            </div>
        </div>
        
        <style>
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            #closeModal:hover {
                background: rgba(76, 175, 80, 0.2);
                transform: rotate(90deg);
            }
        </style>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Close modal function
    function closeModal() {
        const modal = document.getElementById('phiersModal');
        if (modal) {
            modal.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => modal.remove(), 300);
            sessionStorage.setItem('phiersModalShown', 'true');
        }
    }
    
    // Close button
    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    // Skip link
    document.getElementById('skipModal').addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
    });
    
    // Close on background click
    document.getElementById('phiersModal').addEventListener('click', function(e) {
        if (e.target.id === 'phiersModal') {
            closeModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

