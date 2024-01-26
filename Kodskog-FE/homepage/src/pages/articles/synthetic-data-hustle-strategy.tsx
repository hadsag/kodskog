import React from "react";
import RootLayout from "../../app/layout";

const HomePage = () => {

  return (
    <RootLayout>
      <div id="projects" className="w-full flex justify-center items-center">
        <div className="w-full max-w-screen-xl h-screen">
          <div style={{ marginTop: "5%" }}></div>
          <iframe
            src="https://medium.com/@hadisaghir00/machine-learning-no-dataset-available-use-the-hustle-strategy-b8b0fcbb51e1?source=friends_link&sk=a277eb6cb19801ec0fb581063d1a0ee2"
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
