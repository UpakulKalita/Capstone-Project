// Function to check SME category
function checkSME() {
    var i = document.getElementById("inv").value;
    var t = document.getElementById("turn").value;
    var r = document.getElementById("res");

    // calculating...
    if(i == "" && t == "") {
        r.innerText = "Result";
        r.className = "badge bg-secondary w-100 p-2 mt-1";
        return;
    }

    // values to number
    i = parseFloat(i);
    t = parseFloat(t);

    if (i <= 2.5 && t <= 10) {
        r.innerText = "MICRO";
        r.className = "badge bg-success w-100 p-2 mt-1";
    } 
    else if (i <= 25 && t <= 100) {
        r.innerText = "SMALL";
        r.className = "badge bg-success w-100 p-2 mt-1";
    }
    else if (i <= 125 && t <= 500) {
        r.innerText = "MEDIUM";
        r.className = "badge bg-success w-100 p-2 mt-1";
    } 
    else {
        r.innerText = "NOT SME";
        r.className = "badge bg-danger w-100 p-2 mt-1";
    }
}

// Click function for checkboxes
function clickBox(div, type) {
    // find the checkbox inside the div
    var chk = div.querySelector("input");
    
    // timeout needed so click registers
    setTimeout(function() {
        if(chk.checked) {
            div.classList.add("active-" + type);
        } else {
            div.classList.remove("active-" + type);
        }
        doLogic(); // update the status
    }, 50);
}

// Main logic for status
function doLogic() {
    // get all checkboxes
    var kyc = document.getElementsByClassName("kyc");
    var inc = document.getElementsByClassName("inc");
    var biz = document.getElementsByClassName("biz");

    // flags
    var k = false;
    var i = false;
    var b = false;

    // loops to check if any is checked
    for(var x=0; x<kyc.length; x++) {
        if(kyc[x].checked) k = true;
    }
    for(var x=0; x<inc.length; x++) {
        if(inc[x].checked) i = true;
    }
    for(var x=0; x<biz.length; x++) {
        if(biz[x].checked) b = true;
    }

    // ui elements
    var card = document.getElementById("mainCard");
    var title = document.getElementById("statTitle");
    var msg = document.getElementById("statMsg");
    var btn = document.getElementById("btn");
    var icon = document.getElementById("icon");

    // reset defaults
    card.className = "card p-4 text-center status-gray";
    btn.className = "btn btn-secondary w-100";
    btn.disabled = true;
    icon.className = "bi bi-info-circle display-4";

    // Start checking
    if(k == false) {
        // No KYC
        if(i == false && b == false) {
            title.innerText = "Incomplete";
            msg.innerText = "Select docs to check status";
            btn.innerText = "Check Status";
        } else {
            // has other docs but no kyc
            card.className = "card p-4 text-center status-red";
            title.innerText = "Rejected";
            title.style.color = "red";
            msg.innerText = "KYC is missing. Cannot proceed.";
            icon.className = "bi bi-x-circle display-4 text-danger";
            btn.innerText = "Upload KYC";
            btn.className = "btn btn-danger w-100";
            btn.disabled = false;
        }
    } else {
        // KYC is OK
        if(i == true && b == true) {
            // All OK
            card.className = "card p-4 text-center status-green";
            title.innerText = "Approved";
            title.style.color = "green";
            msg.innerText = "All documents ready.";
            icon.className = "bi bi-check-circle display-4 text-success";
            btn.innerText = "Submit Now";
            btn.className = "btn btn-success w-100";
            btn.disabled = false;
        } 
        else if (i == true && b == false) {
            // Income only
            card.className = "card p-4 text-center status-yellow";
            title.innerText = "Conditional";
            title.style.color = "#d9a406";
            msg.innerText = "Income is good. Need business proof.";
            icon.className = "bi bi-exclamation-circle display-4 text-warning";
            btn.innerText = "Proceed";
            btn.className = "btn btn-warning w-100";
            btn.disabled = false;
        }
        else if (i == false && b == true) {
            // Biz only
            card.className = "card p-4 text-center status-blue";
            title.innerText = "On Hold";
            title.style.color = "blue";
            msg.innerText = "Need income proof to check eligibility.";
            icon.className = "bi bi-hourglass-split display-4 text-primary";
            btn.innerText = "Add Income";
            btn.className = "btn btn-primary w-100";
            btn.disabled = false;
        }
        else {
            // Only KYC
            card.className = "card p-4 text-center status-red";
            title.innerText = "Need Info";
            title.style.color = "red";
            msg.innerText = "Only KYC found. Need Income or Business docs.";
            btn.innerText = "Upload More";
        }
    }
}