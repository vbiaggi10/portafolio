const dbRefAbout = firebase.database().ref().child("about");
const leftDetails = document.querySelector("#leftDetails");
const rightSection = document.querySelector("#rightSection");

console.log("rightSection:  ", rightSection)

dbRefAbout.once("value", (value) => {
  const val = value.val().personalDetails;
  const val2 = value.val().aboutMe;
  leftDetails.innerHTML = `
  <div class="personal_details" id="personalDetails">
    <h1 class="ps_name">${val.name}</h1>
    <p class="ps_designation">${val.designation}</p>
    <ul class="info-list">
      <li><span class="title">Age</span><span class="value">${
        val.age
      }</span></li>

      <li><span class="title">Address</span><span class="value">${val.address}
        </span></li>
      <li><span class="title">E-mail</span><span class="value"><a
            href="mailto:${val.email}">${val.email}</a></span></li>
      <li><span class="title">Residence</span><span class="value">${
        val.residence
      }</span></li>
      <li><span class="title">Phone</span><span class="value">${
        val.phone
      }</span></li>
      <li><span class="title">Skype</span><span class="value">${
        val.skype
      }</span></li>
      <li><span class="title">Freelance</span><span class="value available">${
        val.freelance
      }</span></li>
    </ul>

    <ul class="social-links">
    ${
      val.facebook
        ? '<li><a class="tip social-button" href="' +
          val.facebook +
          ' target="_blank"><i class="fab fa-facebook-f"></i></a></li>'
        : ""
    }
    ${
      val.linkedin
        ? '<li><a class="tip social-button" href="' +
          val.linkedin +
          ' target="_blank"><i class="fab fa-linkedin-in"></i></a></li>'
        : ""
    }
    ${
      val.whatsapp
        ? '<li><a class="tip social-button" href="' +
          val.whatsapp +
          ' target="_blank"><i class="fab fa-whatsapp"></i></a></li>'
        : ""
    }
    ${
      val.twitter
        ? '<li><a class="tip social-button" href="' +
          val.twitter +
          ' target="_blank"><i class="fab fa-twitter"></i></a></li>'
        : ""
    }
    ${
      val.instagram
        ? '<li><a class="tip social-button" href="' +
          val.instagram +
          ' target="_blank"><i class="fab fa-instagram"></i></a></li>'
        : ""
    }
    </ul>
  </div>
  `;

  rightSection.innerHTML = `
  <div class="port_heading_wrapper">
    <div class="port_sub_heading_wrapper">
      <h2 class="port_sub_heading">About Me </h2>
    </div>
  </div>
  <h2 class="about_tophead">${val2.title}</h2>
  ${val2.text.map((res) => {
    console.log("res: ", res);
    return `<p class="about_details">${res}</p>`;
  })}
  <div class="signature_box">
    <div class="name">
      <h2>John Weary</h2>
      <p>UI &amp; UX Designer</p>
    </div>

    <div class="signature">
      <img src="assets/images/signature.png" alt="image">
    </div>
  </div>
  <div class="about_section_btn">
    <a href="https://firebasestorage.googleapis.com/v0/b/portfoliovbg.appspot.com/o/documents%2FCV_VALERIA-BIAGGI.pdf?alt=media&token=f4cda0d8-e595-4b10-ae1c-ceb6928439c3"
      class="portfolio_btn btn_yellow">
      <span class="first_text">Download CV</span>
      <span class="second_text">Download</span>
    </a>
    <a href="javascript:;" class="portfolio_btn btn_red" id="redirect_contact">
      <span class="first_text">Hire Me</span>
      <span class="second_text">Contact</span>
    </a>
  `;
});