export const initGoogleAuth = () => {
  const googleSignIn = document.querySelector(".google-icon-box");

  const googleAuthUrl =
    "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D744926430675-mq9cl9t8mcgdsmi1h8vsl9755h73tds5.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3DfkiV5vQburK%2FiuiWJ8wiig%26channel_id%3D6e2d208932ea8180b46ee32e1e86db3aae0968535d8ba016c07bebfc73fd838b%26origin%3Dhttps%3A%2F%2Fzoommer.ge&faa=1&ifkv=ARpgrqe6LYEFzSyuBGELEPil14c5HPwhfUw76ynbZVxTrrzCzHc0btOURIAM_e15VxUmkBbs6OhoSg&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-718614228%3A1728647545951612&ddm=0";

  // Funciton to open the google authentication popup
  const openGoogleAuthPopup = () => {
    window.open(googleAuthUrl, "popupWindow", "width=600,height=600");
  };

  googleSignIn.addEventListener("click", openGoogleAuthPopup);
};
