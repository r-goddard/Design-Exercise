window.onload = function() {
    // SUGGESTION MODAL
    let suggest_modal = document.getElementById("modal-suggest");
    let suggest_btn = document.getElementById("btn-suggest");
    let suggest_close_span = suggest_modal.getElementsByClassName("close")[0];

    // Open suggestion modal on click
    suggest_btn.addEventListener("click", function() {
        suggest_modal.style.display = "block";
    });

    // Close suggestion modal on click
    suggest_close_span.addEventListener("click", function() {
        suggest_modal.style.display = "none";
    });


    // CONTACT MODAL
    let contact_modal = document.getElementById("modal-contact");
    let contact_btn = document.getElementById("btn-contact");
    let contact_close_span = contact_modal.getElementsByClassName("close")[0];

    // Open suggestion modal on click
    contact_btn.addEventListener("click", function() {
        contact_modal.style.display = "block";
    });

    // Close suggestion modal on click
    contact_close_span.addEventListener("click", function() {
        contact_modal.style.display = "none";
    });


    // EXTRA MODAL FIELDS
    let contact_reason = document.getElementById("contact-reason");
    let option_question = document.getElementById("opt-order-question");
    let option_feedback = document.getElementById("opt-website-feedback");
    let option_find_product = document.getElementById("opt-find-product");

    let question = document.getElementById("textarea-order");
    let feedback = document.getElementById("textarea-feedback");
    
    // Show the option field when clicked in the dropdown
    contact_reason.addEventListener("change", function() {
        let selected_option = contact_reason.value;

        if (selected_option == "Order Question") {
            // Make sure the other field is hidden
            if (!feedback.classList.contains("no-display")) {
                feedback.classList.add("no-display");
            }
            
            // Show the hidden field
            question.classList.remove("no-display");
        }
        else if (selected_option == "Website Feedback") {
            // Make sure the other field is hidden
            if (!question.classList.contains("no-display")) {
                question.classList.add("no-display");
            }
            
            // Show the hidden field
            feedback.classList.remove("no-display");
        }
        else if (selected_option == "Trouble Finding Product") {
            // There is a case where the fields will still appear, so hide them and select the first option in the dropdown
            question.classList.add("no-display");
            feedback.classList.add("no-display");
            contact_reason.selectedIndex = 0;

            // Close the modal
            contact_close_span.click()
            
            // Open the product suggestion modal
            suggest_btn.click()

            // Get data entered into Contact Us modal...
            let first_name= document.getElementById("contact-fname").value;
            let last_name= document.getElementById("contact-lname").value;
            let email = document.getElementById("contact-email").value;
            
            // ...and use it to repopulate Product Suggestion modal so the user doesn't have to re-enter their information
            document.getElementById("suggest-fname").value = first_name;
            document.getElementById("suggest-lname").value = last_name;
            document.getElementById("suggest-email").value = email;

        }
    });
 
}

window.onclick = function(event) {
    let sug_modal = document.getElementById("modal-suggest");
    let cont_modal = document.getElementById("modal-contact")

    if (event.target == sug_modal) {
        sug_modal.style.display = "none";
    }
    else if (event.target == cont_modal) {
        cont_modal.style.display = "none";
    }
}





