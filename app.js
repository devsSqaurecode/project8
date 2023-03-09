(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("FFo2q6VxrmCTr4eVp");
})();
function sendMail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let location = document.getElementById("location").value;
  let product = document.getElementById("product_service").value;
  let turnover = document.getElementById("sales_turnover").value;
  let numberOfEmployees = document.getElementById("no_of_employees").value;
  let engagedManufacturing = "";
  let manufacturing = document.getElementsByName("manufacturing");
  for (let i of manufacturing) {
    if (i.checked) {
      engagedManufacturing = i.value;
    }
  }
  let patent = "";
  let patentradio = document.getElementsByName("patent");
  for (let i of patentradio) {
    if (i.checked) {
      patent = i.value;
    }
  }
  let collab = "";
  let collabs = document.getElementsByName("collab");
  for (let i of collabs) {
    if (i.checked) {
      collab = i.value;
    }
  }
  let priority = document.getElementById("priority").value;
  let source = document.getElementById("source").value;
  let budget = document.getElementById("budget_percentage").value;
  let collabInitiation = document.getElementById("collab_initiation").value;
  let majorChallenge = document.getElementById("major_challenges").value;
  let expectation = document.getElementById("iit_expectation").value;
  let benefit = document.getElementById("benefit").value;

  let submitMessage = document.getElementById("submit-successful-message");

  console.log(name);
  console.log(email);
  console.log(mobile);
  console.log(location);
  console.log(product);
  console.log(turnover);
  console.log(numberOfEmployees);
  console.log(engagedManufacturing);
  console.log(patent);
  console.log(collab);
  console.log(priority);
  console.log(source);
  console.log(budget);
  console.log(collabInitiation);
  console.log(majorChallenge);
  console.log(expectation);
  console.log(benefit);

  if (
    name === "" ||
    email === "" ||
    mobile === "" ||
    location === "" ||
    product === "" ||
    turnover === "" ||
    numberOfEmployees === "" ||
    engagedManufacturing === "" ||
    patent === "" ||
    collab === "" ||
    priority === "" ||
    source === "" ||
    budget === "" ||
    collabInitiation === "" ||
    majorChallenge === "" ||
    expectation === "" ||
    benefit === ""
  ) {
    console.log("Formed not filled completely. Not sending any mail");
    window.alert("Please fill the entire form.");
  } else {
    let contactParams = {
      from_name: name,
      email: email,
      mobile: mobile,
      location: location,
      product: product,
      turnover: turnover,
      numberOfEmployees: numberOfEmployees,
      engagedManufacturing: engagedManufacturing,
      patent: patent,
      collab: collab,
      priority: priority,
      source: source,
      budget: budget,
      collabInitiation: collabInitiation,
      majorChallenge: majorChallenge,
      expectation: expectation,
      benefit: benefit,
    };
    emailjs
      .send("service_1bpenmo", "template_39eklij", contactParams)
      .then(function (res) { });

    submitMessage.classList.add("visible");
    setTimeout(() => {
      submitMessage.classList.remove("visible");
    }, 2000);

    console.log(contactParams);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("location").value = "";
    document.getElementById("product_service").value = "";
    document.getElementById("sales_turnover").value = "";
    document.getElementById("no_of_employees").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("source").value = "";
    document.getElementById("budget_percentage").value = "";
    document.getElementById("collab_initiation").value = "";
    document.getElementById("major_challenges").value = "";
    document.getElementById("iit_expectation").value = "";
    document.getElementById("benefit").value = "";
  }
}
