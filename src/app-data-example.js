const appData = {
  // set your target price
  targetPrice: 1.8,
  // set service !NB if you are using Gmail,
  // DO NOT USE YOUR MAIN GOOGLE ACCOUNT
  // if you send more then 500 emails/day
  // your account may be blocked!
  service: "gmail",
  // set host
  host: "smtp.gmail.com",
  // set target URL eg. Google Finance
  url: "https://www.google.com/finance",
  // set image URL for the email template
  imageUrl: "https://some-image/source",
  // list subscribed users
  emailList: [
    "user.one@gmail.com",
    "user.two@gmail.com",
    "user.three@gmail.com",
  ],
  // set email template
  email: {
    from: "Your name",
    subject: "Current USD to BGN price",
  },
  // set authentication
  auth: {
    // your email address
    user: "your.account@gmail.com",
    // your password / Google AppPassword
    pass: "secretP@$$wo0d",
  },
};

module.exports = appData;
