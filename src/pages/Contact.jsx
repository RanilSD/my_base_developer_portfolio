import React from "react";
import { contactInfo } from "../Details";

function Contact() {
  const { email, phone } = contactInfo;
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Please Email me for more information. Thank You!!!
      </h1>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-light block">or</span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;







// import React from "react";
// import { contactDetails } from "../Details";

// class Contact extends React.Component {
//     render() {
//       return (
//         <section
//           className="paralax-mf footer-paralax bg-image sect-mt4 route"
//           style={{ backgroundImage: "purple" }}
//         >
//           <div className="overlay-mf"></div>
//           <div className="container">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="contact-mf">
//                   <div id="contact" className="box-shadow-full">
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="title-box-2">
//                           <h5 className="title-left">Send A Message</h5>
//                         </div>
//                         <div>
//                           <form
//                             action="https://formspree.io/xdoeonlo"
//                             method="POST"
//                             className="contactForm"
//                           >
//                             <div id="sendmessage">
//                               Your message has been sent. Thank you!
//                             </div>
//                             <div id="errormessage"></div>
//                             <div className="row">
//                               <div className="col-md-12 mb-3">
//                                 <div className="form-group">
//                                   <input
//                                     type="text"
//                                     name="name"
//                                     className="form-control"
//                                     id="name"
//                                     placeholder="Your Name"
//                                     data-rule="minlen:4"
//                                     data-msg="Please enter at least 4 chars"
//                                   />
//                                   <div className="validation"></div>
//                                 </div>
//                               </div>
//                               <div className="col-md-12 mb-3">
//                                 <div className="form-group">
//                                   <input
//                                     type="email"
//                                     className="form-control"
//                                     name="email"
//                                     id="email"
//                                     placeholder="Your Email"
//                                     data-rule="email"
//                                     data-msg="Please enter a valid email"
//                                   />
//                                   <div className="validation"></div>
//                                 </div>
//                               </div>
//                               <div className="col-md-12 mb-3">
//                                 <div className="form-group">
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     name="subject"
//                                     id="subject"
//                                     placeholder="Subject"
//                                     data-rule="minlen:4"
//                                     data-msg="Please enter at least 8 chars of subject"
//                                   />
//                                   <div className="validation"></div>
//                                 </div>
//                               </div>
//                               <div className="col-md-12 mb-3">
//                                 <div className="form-group">
//                                   <textarea
//                                     className="form-control"
//                                     name="message"
//                                     rows="5"
//                                     data-rule="required"
//                                     data-msg="Please write something for us"
//                                     placeholder="Message"
//                                   ></textarea>
//                                   <div className="validation"></div>
//                                 </div>
//                               </div>
//                               <div className="col-md-12">
//                                 <button
//                                   type="submit"
//                                   className="button button-a button-big button-rouded"
//                                 >
//                                   Send Message
//                                 </button>
//                               </div>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="title-box-2 pt-4 pt-md-0">
//                           <h5 className="title-left">Get in Touch</h5>
//                         </div>
//                         <div className="more-info">
//                           <p className="lead">
//                             I would love to hear your feedback!!!
//                             <br />
//                             Please fill the form and send me an email!!!
//                           </p>
//                           {}
//                         </div>
//                         <div className="socials">
//                           <ul>
//                             <li>
//                               <a
//                                 href=""
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 <span className="ico-circle">
//                                   <i className="ion-social-codepen"></i>
//                                 </span>
//                               </a>
//                             </li>
//                             <li>
//                               <a
//                                 href=""
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 <span className="ico-circle">
//                                   <i className="ion-social-github"></i>
//                                 </span>
//                               </a>
//                             </li>
//                             <li>
//                               <a
//                                 href=""
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 <span className="ico-circle">
//                                   <i className="ion-social-linkedin"></i>
//                                 </span>
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <footer>
//             <div className="container">
//               <div className="row">
//                 <div className="col-sm-12">
//                   <div className="copyright-box">
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </footer>
//         </section>
//       );
//     }
//   }

// export default Contact;

