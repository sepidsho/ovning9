document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate");
    const outputDiv = document.getElementById("output");

    generateButton.addEventListener("click", function () {
        const range = parseInt(document.getElementById("range").value);
        const bish = parseInt(document.getElementById("bish").value);
        const bosh = parseInt(document.getElementById("bosh").value);

        if (range < 1 || bish < 1 || bosh < 1) {
            alert("Please enter positive values.");
            return;
        }

        let result = "";
        for (let i = 1; i <= range; i++) {
            if (i % bish === 0 && i % bosh === 0) {
                result += "Bish-Bosh, ";
            } else if (i % bish === 0) {
                result += "Bish, ";
            } else if (i % bosh === 0) {
                result += "Bosh, ";
            } else {
                result += i + ", ";
            }
        }

        outputDiv.textContent = result.substring(0, result.length - 2); // Remove the last comma and space
    });
});
