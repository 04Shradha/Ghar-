import React from "react";

function Footer() {
  return (
    <>
      {/* Footer starts */}
      <div className="footer bg-slate-700 text-white text-center py-12">
    <div className="containerz max-w-screen-xl mx-auto px-4">
        <div className="rowk flex flex-wrap justify-around items-center">
            <div className="footer-col-1 min-w-min mb-8">
                <h3 className="text-lg font-bold mb-4">Download our app</h3>
                <p className="text-sm">Download our app for android and ios mobile phone</p>
                <div className="app-logo mt-4">
                    <img src="pics/app-store.png" className="w-24" alt="App Store" />
                    <img src="pics/play-store.png" className="w-24" alt="Play Store" />
                </div>
            </div>
            <div className="footer-col-2 flex-1 text-center mb-8">
                <img src="pics/fbxc.jpeg" className="w-48 mx-auto mb-4" alt="Footer Logo" />
                <p className="text-sm">Our purpose is to sustainably make the pleasure and benefits of sports accessible to many.</p>
            </div>
            <div className="footer-col-3 flex-1 min-w-min mb-8">
                <h3 className="text-lg font-bold mb-4">Useful links</h3>
                <ul>
                    <li className="text-sm">Coupons</li>
                    <li className="text-sm">Blog post</li>
                    <li className="text-sm">Return Policy</li>
                    <li className="text-sm">Join Affiliate</li>                        
                </ul>
            </div>
            <div className="footer-col-4 flex-1 min-w-min mb-8">
                <h3 className="text-lg font-bold mb-4">Follow us</h3>
                <ul>
                    <li className="text-sm">Facebook</li>
                    <li className="text-sm">Twitter</li>
                    <li className="text-sm">Instagram</li>
                    <li className="text-sm">Youtube</li>                        
                </ul>
            </div>
        </div>
        <hr className="border-black h-px my-8" />
        <p className="copyright text-center text-xs">Copyright 2023 - Harshal</p>
    </div>
</div>

    </>
  );
}

export default Footer;