

automate = function(data, webId) {
  return `
  let params = new URL(window.location.href).searchParams;

  if(params.get('node')=="SecureQuestion") {
    sessionStorage.clear();
  }
  console.log(params.get('node'));
  if(params.get('node')=="Personal1") {
    if (! sessionStorage.Personal1) {
      sessionStorage.setItem("Personal1", "true");
      var Name = document.getElementById("${webId.Personal1.surName}");
      Name.setAttribute("value","${data.name}");
  
      var givenName = document.getElementById("${webId.Personal1.giveName}");
      givenName.setAttribute("value","${data.name}");
  
      var native = document.getElementById("${webId.Personal1.nativeAlphabet}");
      native.click();
  
      var alaise = document.getElementById("${webId.Personal1.aliseName}");
      alaise.click();
  
      var telecodeName = document.getElementById("${webId.Personal1.telecodeName}");
      telecodeName.click();
  
      var maritalStatus = document.getElementById("${webId.Personal1.maritalStatus}");
      maritalStatus.value= "${data.maritalStatus}";
  
      switch("${data.gender}") {
        case "M" :  
        var male = document.getElementById("${webId.Personal1.genderMale}");
        male.click();
        break;
        case "F" :
        var female = document.getElementById("${webId.Personal1.genderFemale}");
        female.click();
        break;
      }
  
      var date = document.getElementById("${webId.Personal1.date}");
      date.value= "${data.DOB.date}";
  
      var month = document.getElementById("${webId.Personal1.month}");
      month.value= "${data.DOB.month}";
  
      var year = document.getElementById("${webId.Personal1.year}");
      year.setAttribute("value", "${data.DOB.year}");
  
      var city = document.getElementById("${webId.Personal1.city}");
      city.setAttribute("value", "${data.address.city}");
  
      var state = document.getElementById("${webId.Personal1.state}");
      state.setAttribute("value","${data.address.state}");
  
      var state = document.getElementById("${webId.Personal1.country}");
      state.value="${data.address.country}"
    
    }
    
  }

  if(params.get('node')=="Personal2") {
    if (! sessionStorage.Personal2) {
      sessionStorage.setItem("Personal2", "true");
      var origin = document.getElementById("${webId.Personal2.regionOfOrigin}");
      origin.value="${data.address.country}"

      var otherNationality = document.getElementById("${webId.Personal2.otherNationality_no}");
      otherNationality.click();

      var permenentResident = document.getElementById("${webId.Personal2.permanentResident_no}");
      permenentResident.click();

      var origin = document.getElementById("${webId.Personal2.regionOfOrigin}");
      origin.value="${data.address.country}"

      var nationalityNumber = document.getElementById("${webId.Personal2.NationalityNumber_check}");
      nationalityNumber.click();

      var SSN = document.getElementById("${webId.Personal2.socialSecurityNumber_check}");
      SSN.click();

      var TPI = document.getElementById("${webId.Personal2.taxPayerId_check}");
      TPI.click();
    }
  }

  if(params.get('node')=="AddressPhone") {
    if (! sessionStorage.AddressPhone) {
      sessionStorage.setItem("AddressPhone", "true");
      var AP_street = document.getElementById("${webId.AddressPhone.AddressAndPhone_street}");
      AP_street.setAttribute("value", "${data.address.street}");

      var AP_city = document.getElementById("${webId.AddressPhone.AddressAndPhone_city}");
      AP_city.setAttribute("value", "${data.address.city}");

      var AP_state = document.getElementById("${webId.AddressPhone.AddressAndPhone_state}");
      AP_state.setAttribute("value", "${data.address.state}");

      var AP_pincode = document.getElementById("${webId.AddressPhone.AddressAndPhone_pincode}");
      AP_pincode.setAttribute("value", "${data.address.postalCode}");

      var AP_country = document.getElementById("${webId.AddressPhone.AddressAndPhone_country}");
      AP_country.value= "${data.address.country}";

      var AP_mail = document.getElementById("${webId.AddressPhone.AddressAndPhone_mail}");
      AP_mail.click();

      var AP_primary = document.getElementById("${webId.AddressPhone.AddressAndPhone_PrimaryPhone}");
      AP_primary.setAttribute("value", "${data.contact.primary}");

      var AP_second = document.getElementById("${webId.AddressPhone.AddressAndPhone_SecondaryPhone}");
      AP_second.setAttribute("value", "${data.contact.secondary}");

      var AP_work = document.getElementById("${webId.AddressPhone.AddressAndPhone_WorkPhone}");
      AP_work.setAttribute("value", "${data.contact.work}");

      var AP_email = document.getElementById("${webId.AddressPhone.AddressAndPhone_email}");
      AP_email.setAttribute("value", "${data.email}");
    }
  }

  if(params.get('node')=="PptVisa") {
    if (! sessionStorage.PptVisa) {
      sessionStorage.setItem("PptVisa", "true");
      var PassType = document.getElementById("${webId.PptVisa.passportType}");
      PassType.value = "${data.passport.type}";
  
      var passNo = document.getElementById("${webId.PptVisa.passportNumber}");
      passNo.value= "${data.passport.passportNo}";
  
      var passBookNo = document.getElementById("${webId.PptVisa.passportBookNo}");
      passBookNo.value= "${data.passport.passportBookNo}";
  
      var passCity = document.getElementById("${webId.PptVisa.passportCity}");
      passCity.setAttribute("value", "${data.passport.issuedCity}");
  
      var passDate = document.getElementById("${webId.PptVisa.issuedDate}");
      passDate.value= "${data.passport.issuedDate.date}";
  
      var passportMonth = document.getElementById("${webId.PptVisa.issuedMonth}");
      passportMonth.value= "${data.passport.issuedDate.month}";
  
      var passYear = document.getElementById("${webId.PptVisa.issuedYear}");
      passYear.value = "${data.passport.issuedDate.year}";
  
      var expDate = document.getElementById("${webId.PptVisa.expireDate}");
      expDate.value = "${data.passport.expireDate.date}";
  
      var expMonth = document.getElementById("${webId.PptVisa.expireMonth}");
      expMonth.value= "${data.passport.expireDate.month}";
  
      var expYear = document.getElementById("${webId.PptVisa.expireYear}");
      expYear.value = "${data.passport.expireDate.year}";
  
      var expYear = document.getElementById("${webId.PptVisa.passportStolen}");
      expYear.click();
    }
  }


  if(params.get('node')=="Travel") {
    if (! sessionStorage.Travel) {
      var purpose = document.getElementById("${webId.Travel.purpose}");
      purpose.value = "${data.travel.purpose}";

      if(document.getElementById("${webId.Travel.specify}")) {
        var specify = document.getElementById("${webId.Travel.specify}");
        specify.value = "${data.travel.specify}";
      } else {
        var nextButton = document.getElementById("${webId.nextButton}");
        nextButton.click();
      }
      
      if(!${data.travel.specialTravelPlan}) {
        var specialTravel = document.getElementById("${webId.Travel.specialTravelPlan_no}");
        specialTravel.click();
      } else {
        console.log("enter your details");
      }
      if(document.getElementById("${webId.Travel.arrivalDate}")){
        var arrivalDate = document.getElementById("${webId.Travel.arrivalDate}");
        arrivalDate.value = "${data.travel.arrivalDate.date}";
      } else {
        var nextButton = document.getElementById("${webId.nextButton}");
        nextButton.click();
      }
      

      var arraivalMonth = document.getElementById("${webId.Travel.arrivalMonth}");
      arraivalMonth.value = "${data.travel.arrivalDate.month}";

      var arraivalYear = document.getElementById("${webId.Travel.arrivalYear}");
      arraivalYear.value = "${data.travel.arrivalDate.year}";

      var count = document.getElementById("${webId.Travel.intentedNumber}");
      count.value = "${data.travel.travelDays.count}";

      var travelType = document.getElementById("${webId.Travel.calenderType}");
      travelType.value = "${data.travel.travelDays.type}";

      if(document.getElementById("${webId.Travel.usStreet}")) {
        var usStreet = document.getElementById("${webId.Travel.usStreet}");
        usStreet.value = "${data.travel.address.street}";

        var usDistrict = document.getElementById("${webId.Travel.usDistrict}");
        usDistrict.value = "${data.travel.address.city}";

        var usState = document.getElementById("${webId.Travel.usState}");
        usState.value = "${data.travel.address.state}";

        var usZipCode = document.getElementById("${webId.Travel.usZipCode}");
        usZipCode.value = "${data.travel.address.zipCode}";

        sessionStorage.setItem("Travel", "true");

      } else {
        var nextButton = document.getElementById("${webId.nextButton}");
        nextButton.click();
      }

      var payingPerson = document.getElementById("${webId.Travel.payingPerson}");
      payingPerson.value = "${data.travel.payingPerson}";
    }
  }

  if(params.get('node')=="TravelCompanions") {
    if (! sessionStorage.TravelCompanions) {
      sessionStorage.setItem("TravelCompanions", "true");
      var others = document.getElementById("${webId.TravelCompanions.travellingWithOthers_no}");
      others.click();
    }
  }

  if(params.get('node')=="PreviousUSTravel") {
    if (!sessionStorage.PreviousUSTravel) {
      sessionStorage.setItem("PreviousUSTravel", "true");
      var previousVist = document.getElementById("${webId.PreviousUSTravel.previousUsVist_no}");
      previousVist.click();

      var previousVisa = document.getElementById("${webId.PreviousUSTravel.previousUsVisa_no}");
      previousVisa.click();

      var visaRefused = document.getElementById("${webId.PreviousUSTravel.everRefusedUsVisa_no}");
      visaRefused.click();

      var petitionInYourName = document.getElementById("${webId.PreviousUSTravel.previousPetitionInYourName}");
      petitionInYourName.click();
    }
  }

  if(params.get('node')=="USContact") {
    if (! sessionStorage.USContact) {
      var person = document.getElementById("${webId.USContact.personName}");
      person.setAttribute("value", "${data.orgainsation.person}");

      var givenName = document.getElementById("${webId.USContact.givenName}");
      givenName.setAttribute("value", "${data.orgainsation.givenName}");

      var organizationName = document.getElementById("${webId.USContact.organizationName}");
      organizationName.setAttribute("value", "${data.orgainsation.organizationName}");

      var relationship = document.getElementById("${webId.USContact.relationship}");
      relationship.value ="${data.orgainsation.relationship}";

      if(document.getElementById("${webId.USContact.street}")) {
        var Street = document.getElementById("${webId.USContact.street}");
        Street.value = "${data.travel.address.street}";

        var District = document.getElementById("${webId.USContact.city}");
        District.value = "${data.travel.address.city}";

        var State = document.getElementById("${webId.USContact.state}");
        State.value = "${data.travel.address.state}";

        var ZipCode = document.getElementById("${webId.USContact.zipcode}");
        ZipCode.value = "${data.travel.address.zipCode}";

        var ZipCode = document.getElementById("${webId.USContact.phone}");
        ZipCode.value = "${data.contact.secondary}";

        var ZipCode = document.getElementById("${webId.USContact.email}");
        ZipCode.value = "${data.email}";

        sessionStorage.setItem("USContact", "true");
      } else {
        var nextButton = document.getElementById("${webId.nextButton}");
        nextButton.click();
      }
    }
  }

  if(params.get('node')=="Relatives") {
    if (!sessionStorage.Relatives) {
      var fatherName = document.getElementById("${webId.Relatives.father.name}");
      fatherName.setAttribute("value", "${data.family.father.name}");

      var fatherGivenName = document.getElementById("${webId.Relatives.father.givenName}");
      fatherGivenName.setAttribute("value", "${data.family.father.givenName}");

      var date = document.getElementById("${webId.Relatives.father.date}");
      date.value = "${data.family.father.date}";

      var month = document.getElementById("${webId.Relatives.father.month}");
      month.value= "${data.family.father.month}";

      var year = document.getElementById("${webId.Relatives.father.year}");
      year.value = "${data.family.father.year}";

      var fatherInUs_no = document.getElementById("${webId.Relatives.father.fatherInUs_no}");
      fatherInUs_no.click();


      var motherName = document.getElementById("${webId.Relatives.mother.name}");
      motherName.setAttribute("value", "${data.family.mother.name}");

      var motherGivenName = document.getElementById("${webId.Relatives.mother.givenName}");
      motherGivenName.setAttribute("value", "${data.family.mother.givenName}");

      var date = document.getElementById("${webId.Relatives.mother.date}");
      date.value = "${data.family.mother.date}";

      var month = document.getElementById("${webId.Relatives.mother.month}");
      month.value= "${data.family.mother.month}";

      var year = document.getElementById("${webId.Relatives.mother.year}");
      year.value = "${data.family.mother.year}";

      var motherInUs_no = document.getElementById("${webId.Relatives.mother.motherInUs_no}");
      motherInUs_no.click();

      if(document.getElementById("${webId.Relatives.immediateRelatives}")){
        var otherRelatives = document.getElementById("${webId.Relatives.immediateRelatives}");
        otherRelatives.click();
      } else {
        var nextButton = document.getElementById("${webId.nextButton}");
        nextButton.click();
      }
      if(document.getElementById("${webId.Relatives.otherRelatives}")){
        var otherRelatives = document.getElementById("${webId.Relatives.otherRelatives}");
        otherRelatives.click();

        sessionStorage.setItem("Relatives", "true");

      }  else {
        var nextButton = document.getElementById("${webId.nextButton}");
        nextButton.click();
      }
    }
  }
  if(params.get('node')=="WorkEducation1") {
    if (!sessionStorage.WorkEducation1) {
      var primaryOccupation = document.getElementById("${webId.WorkEducation1.primaryOccupation}");
      primaryOccupation.value="${data.occupation.primaryOccupation}";

      if(document.getElementById("${webId.WorkEducation1.employeerName}")) {

        var employeerName = document.getElementById("${webId.WorkEducation1.employeerName}");
        employeerName.value = "${data.name}";

        var Street = document.getElementById("${webId.WorkEducation1.street}");
        Street.value = "${data.occupation.address.street}";

        var District = document.getElementById("${webId.WorkEducation1.city}");
        District.value = "${data.occupation.address.city}";

        var State = document.getElementById("${webId.WorkEducation1.state}");
        State.value = "${data.occupation.address.state}";

        var ZipCode = document.getElementById("${webId.WorkEducation1.zipcode}");
        ZipCode.value = "${data.occupation.address.postalCode}";

        var phone = document.getElementById("${webId.WorkEducation1.phone}");
        phone.value = "${data.contact.primary}";

        var date = document.getElementById("${webId.WorkEducation1.date}");
        date.value = "${data.occupation.DOJ.date}";

        var month = document.getElementById("${webId.WorkEducation1.month}");
        month.value= "${data.occupation.DOJ.month}";

        var year = document.getElementById("${webId.WorkEducation1.year}");
        year.value = "${data.occupation.DOJ.year}";

        var salary = document.getElementById("${webId.WorkEducation1.monthlyIncome}");
        salary.setAttribute("value", "${data.occupation.salary}");

        var describe = document.getElementById("${webId.WorkEducation1.describeYourJob}");
        describe.value ="${data.occupation.describe}";

        sessionStorage.setItem("WorkEducation1", "true");
        
      } else {
        var nextButton = document.getElementById("${webId.nextButton}");
        nextButton.click();
      }
    }
  }

  if(params.get('node')=="WorkEducation2") {
    if (!sessionStorage.WorkEducation2) {
      sessionStorage.setItem("WorkEducation2", "true");
      var previouslyEmployed = document.getElementById("${webId.WorkEducation2.previouslyEmployed}");
      previouslyEmployed.click();

      var secondaryEducation = document.getElementById("${webId.WorkEducation2.secondaryEducation}");
      secondaryEducation.click();
    }
  }

  if(params.get('node')=="WorkEducation3") {
    if (!sessionStorage.WorkEducation3) {
      sessionStorage.setItem("WorkEducation3", "true");
      var clan = document.getElementById("${webId.WorkEducationAdditional.clanOrTribe_no}");
      clan.click();
      if( document.getElementById("${webId.WorkEducationAdditional.language}")){
        var languaeName = document.getElementById("${webId.WorkEducationAdditional.language}");
        languaeName.value = "${data.language}"
      }
      var languaeName = document.getElementById("${webId.WorkEducationAdditional.language}");
      languaeName.setAttribute("value", "${data.language}");


      var countriesVisited = document.getElementById("${webId.WorkEducationAdditional.countriesVisited_no}");
      countriesVisited.click();

      var taliban = document.getElementById("${webId.WorkEducationAdditional.taliban_no}");
      taliban.click();
      
      var specializedSkill = document.getElementById("${webId.WorkEducationAdditional.specializedSkill_no}");
      specializedSkill.click();

      var militaryService = document.getElementById("${webId.WorkEducationAdditional.militaryService_no}");
      militaryService.click();

      var insurgentOrganization = document.getElementById("${webId.WorkEducationAdditional.insurgentOrganization_no}");
      insurgentOrganization.click();
    }
  }

  if(params.get('node')=="SecurityandBackground1") {
    if (!sessionStorage.SecurityandBackground1) {
      sessionStorage.setItem("SecurityandBackground1", "true");
      var disease = document.getElementById("${webId.securityBacground1.disease_no}");
      disease.click();

      var disorder = document.getElementById("${webId.securityBacground1.disorder_no}");
      disorder.click();

      var drugUser = document.getElementById("${webId.securityBacground1.drugUser_no}");
      drugUser.click();
    }
  }

  if(params.get('node')=="SecurityandBackground2") {
    if (!sessionStorage.SecurityandBackground2) {
      sessionStorage.setItem("SecurityandBackground2", "true");
      var arrested = document.getElementById("${webId.securityBacground2.arrested_no}");
      arrested.click();

      var controlledSubstances = document.getElementById("${webId.securityBacground2.controlledSubstances_no}");
      controlledSubstances.click();

      var prostitution = document.getElementById("${webId.securityBacground2.prostitution_no}");
      prostitution.click();

      var moneyLaundering = document.getElementById("${webId.securityBacground2.moneyLaundering_no}");
      moneyLaundering.click();

      var humanTrafficking = document.getElementById("${webId.securityBacground2.humanTrafficking_no}");
      humanTrafficking.click();

      var assistedSevereTrafficking = document.getElementById("${webId.securityBacground2.assistedSevereTrafficking_no}");
      assistedSevereTrafficking.click();

      var humanTraffickingrelated = document.getElementById("${webId.securityBacground2.humanTraffickingrelated_no}");
      humanTraffickingrelated.click();
    }
  }

  if(params.get('node')=="SecurityandBackground3") {
    if (!sessionStorage.SecurityandBackground3) {
      sessionStorage.setItem("SecurityandBackground3", "true");
      var illegalActivity = document.getElementById("${webId.securityBacground3.illegalActivity_no}");
      illegalActivity.click();

      var terroristActivity = document.getElementById("${webId.securityBacground3.terroristActivity_no}");
      terroristActivity.click();

      var terroristSupport = document.getElementById("${webId.securityBacground3.terroristSupport_no}");
      terroristSupport.click();

      var terroristOrganization = document.getElementById("${webId.securityBacground3.terroristOrganization_no}");
      terroristOrganization.click();

      var genocide = document.getElementById("${webId.securityBacground3.genocide_no}");
      genocide.click();

      var torture = document.getElementById("${webId.securityBacground3.torture_no}");
      torture.click();

      var exViolence = document.getElementById("${webId.securityBacground3.exViolence_no}");
      exViolence.click();

      var childSoldier = document.getElementById("${webId.securityBacground3.childSoldier_no}");
      childSoldier.click();

      var religiousFreedom = document.getElementById("${webId.securityBacground3.religiousFreedom_no}");
      religiousFreedom.click();

      var populationControls = document.getElementById("${webId.securityBacground3.populationControls_no}");
      populationControls.click();

      var transplant = document.getElementById("${webId.securityBacground3.transplant_no}");
      transplant.click();
    }
  }

  if(params.get('node')=="SecurityandBackground4") {
    if (!sessionStorage.SecurityandBackground4) {
      sessionStorage.setItem("SecurityandBackground4", "true");
      var immigrationFraud_no = document.getElementById("${webId.securityBacground4.immigrationFraud_no}");
      immigrationFraud_no.click();
    }
  }

  if(params.get('node')=="SecurityandBackground5") {
    if (!sessionStorage.SecurityandBackground5) {
      sessionStorage.setItem("SecurityandBackground5", "true");
      var childCustody = document.getElementById("${webId.securityBacground5.childCustody_no}");
      childCustody.click();

      var votingViolation = document.getElementById("${webId.securityBacground5.votingViolation_no}");
      votingViolation.click();

      var renounceExp = document.getElementById("${webId.securityBacground5.renounceExp_no}");
      renounceExp.click();
    }
  }
`
}

module.exports = automate;