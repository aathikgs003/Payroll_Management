function calculateSalary() {
    let empName = document.getElementById("empName").value;
    let basicSalary = parseFloat(document.getElementById("basicSalary").value);

    if (isNaN(basicSalary) || basicSalary <= 0) {
        document.getElementById("result").innerHTML = "<p style='color:red;'>Enter a valid salary.</p>";
        return;
    }

    let hra = basicSalary * 0.2;  // 20% of basic
    let da = basicSalary * 0.1;   // 10% of basic
    let tax = basicSalary * 0.05; // 5% tax
    let netSalary = basicSalary + hra + da - tax;

    document.getElementById("result").innerHTML = `
        <h3>Salary Details for ${empName}</h3>
        <p>Basic Salary: ₹${basicSalary.toFixed(2)}</p>
        <p>HRA (20%): ₹${hra.toFixed(2)}</p>
        <p>DA (10%): ₹${da.toFixed(2)}</p>
        <p>Tax (5%): ₹${tax.toFixed(2)}</p>
        <hr>
        <p><strong>Net Salary: ₹${netSalary.toFixed(2)}</strong></p>
    `;
}
