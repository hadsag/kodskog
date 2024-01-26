import React from "react";
import RootLayout from "../../app/layout";

const HomePage = () => {

  return (
    <RootLayout>
      <div id="projects" className="w-full flex justify-center items-center">
        <div className="w-full max-w-screen-xl h-screen">
          <div style={{ marginTop: "5%" }}></div>
          <iframe
            src="https://onedrive.live.com/embed?resid=399672A6A89E51EE%21200277&authkey=!ADwni_icleqTT4k&em=2"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '95%',
              maxWidth: '80vw',
              border: 'none',
              overflow: 'hidden',
            }}
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </RootLayout>
  );
};

export default HomePage;


