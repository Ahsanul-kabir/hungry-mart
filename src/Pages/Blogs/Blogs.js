import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>My Questions</h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Difference between authorization and authentication?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p><strong>Authentication :</strong> Authentication verifies who the user is and authentication is the first step of a good identity and access management process</p>
                            <p><strong>Authorization :</strong> Authorization determines what resources a user can access and Authorization always takes place after authentication.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p> <strong>Firebase is used</strong> for many purposes that can help your apps to develop, grow and make it a quality website.Firebase is a less technical and time-saving alternative to writing absolute backend code for dynamic apps.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others.All of these can save you a significant amount of development cost.</p>
                            <p><strong>Firebase authentication Other options are</strong>, Auth0,Amazon Cognito,Keycloak, etc.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What other services does firebase provide other than authentication?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Without authentication firebase give Hosting, Realtime Database support,Cloud Storage,Google Analytics also.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;