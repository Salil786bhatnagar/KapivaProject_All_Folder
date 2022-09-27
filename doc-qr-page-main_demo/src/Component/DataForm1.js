import React from "react";
// import {
//   validName,
//   validEmail,
//   validContact,
// } from "../Validation/validationForm";

import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

function DataForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
       if(data){
        Swal.fire(
          {icon: 'success',
          title: 'Record Submitted'},
        )
       }else{
        Swal.fire(
          ({
              icon: 'error',
              title: 'Oops...',
              text: 'Fail to Submit Record',
            })
          )
       }
      }; // your form submit function which will invoke after successful validation


  return (
    <div className="container">
      {/* <div className="container">
        <h1 className="head-h1">
          Get your FREE 4Balance wellness guide curated by Ayurvedic doctors
        </h1>
        <p className="head-p">CUSTOMIZED . LONG TERM . NATURAL</p>
      </div> */}

      <br/>
      <form onSubmit={handleSubmit(onSubmit)} class="row" >
          <div class="col">

          {/* username */}

          <input
              {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
              })}
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              />
              <span>
              {errors?.firstName?.type === "required" &&
              <p class="alert alert-danger p-firstname" role="alert"> This field is required</p>
              }

              {errors?.firstName?.type === "maxLength" && (
              <p class="alert alert-danger p-firstname" role="alert">First name cannot exceed 20 characters</p>
              )}

              {errors?.firstName?.type === "pattern" && (
              <p class="alert alert-danger p-firstname" role="alert">Alphabetical characters only</p>
              )}
              
              </span>
              {/* <div class="alert alert-danger" role="alert">
              This is a danger alert—check it out!
              </div> */}
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose a username.</div>
          </div>

          {/* email */}

          <div className="form-flex">
            <div class="col">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
              //   onChange={(event) => validEmail(event)}
                {...register("mail", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: "invalid email address"})}
              />
              <span>
              {errors?.mail?.type === "required" &&
              <p class="alert alert-danger p-email" role="alert">This field is required</p>
              }  
              {errors?.mail?.type === "pattern" &&
              <p class="alert alert-danger p-email" role="alert">Invalid Email id</p>
              } 
              </span>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please choose a username.</div>
            </div>

          {/* number */}

          <div class="col">
            <input
              type="number"
              class="form-control"
              placeholder="Contact"
              aria-label="Contact"
              minLength={10} {...register("number", { required: true, pattern: /[0-9]{10}/,  })}
            />
            <span>
            {errors?.number?.type === "required" && 
             <p class="alert alert-danger p-number" role="alert">This field is required</p>
            }
            {errors.number?.type === "pattern" && (
             <p class="alert alert-danger p-number" role="alert">10 digit only </p>
             )}
            </span>

            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        {/* submit */}
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default DataForm;
