import React from "react";

function Login() {
    return ( 
        <div>
            <div class="card mb-3">
            <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
                <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
            </div>
            <div class="col-lg-8">
                <div class="card-body py-5 px-md-5">

                <form>
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                    </div>
                    <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                    </div>
                    <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        {/* <!-- Checkbox --> */}
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div class="col">
                        {/* <!-- Simple link --> */}
                        <a href="#!">Forgot password?</a>
                    </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

                </form>
            </div>
            </div>
        </div> 
        </div>
        </div>
        );
}

export default Login;