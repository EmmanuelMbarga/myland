type imgLogo={
    logoApp:string,
    alt:string
}


function WebAppLogo({logoApp,alt}:imgLogo) {
  return (
    <>
      <img
        src={logoApp}
        alt={alt}
        className=" w-10 p-1 h-10"
      />
    </>
  );
}

export default WebAppLogo;
