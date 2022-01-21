import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import NextImage from "./image"
import CustomLink from "./custom-link"

const Footer = ({ footer }) => {
  return (
    <footer className="pt-0 bg-gray-100">
      {/* <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div>
          {footer.logo && (
            <NextImage width="120" height="33" media={footer.logo} />
          )}
        </div>
        <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
            >
              <p className="uppercase tracking-wide font-semibold">
                {footerColumn.title}
              </p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900"
                  >
                    <CustomLink link={link}>{link.text}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div> */}
	   <section>
    {/* <div class="container text-center"> */}
      <div className="comm_cont text-center">
        
            <p>Niraamaya Wellness Retreats</p><p>Corporate Office: Niraamaya Retreats Private Limited, #54, Richmond Road, Bangalore - 560025.</p>
           
      <div className="col-xs-12">
        <div className="col-xs-12">
          <div className="row">
            <div className="">
              <ul className="flex flex-row justify-center flex-wrap gap-4 py-6">
              <li>
                <div className="footer-detail mail-show-hide">
                  <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-envelope fa-stack-1x"></i>
                  </span>
                    <a href="mailto:reservations@niraamaya.com?Subject=Enquiry" target="_top">reservations@niraamaya.com</a>
                  </div>
                </li>
                <li>
                <div className="footer-detail">
                  <span className="fa-stack">
                    <i className="fa fa-square fa-stack-2x"></i>
                    <i className="fa fa-phone fa-stack-1x"></i>
                  </span>
                  <span>+91 80 4510 4510</span>
                </div>
              </li>
              </ul>
             </div>
          </div>
        </div>
      <div className="col-sm-12 footer-row">
  <div className="social_block col-sm-12 col-md-5">
      <div className="social_head">
        <p>Get In Touch</p>
        </div><div className="social_cont">
          <div className="socialIcon flex flex-row justify-center flex-wrap gap-4">
          
              <a className="social-fb" href="https://www.facebook.com/NiraamayaRetreats" target="_blank">
              <span className="fa fa-facebook">facebook</span></a>

              <a className="social-tw" href="https://twitter.com/NiraamayaForU" target="_blank">
              <span className="fa fa-twitter">twitter</span></a>
              
              <a className="social-lin" href="https://www.linkedin.com/company/niraamayalife" target="_blank">
              <span className="fa fa-linkedin">Linkedin</span></a>
              
              <a className="social-ig" href="https://www.instagram.com/niraamayawellnessretreats/" target="_blank">
              <span className="fa fa-instagram">instagram</span></a>
            
              <a className="social-yt" href="https://www.youtube.com/c/NiraamayaInGroup" target="_blank"><span className="fa fa-youtube">Youtube</span></a>
              
              <a className="social-wa" href="https://web.whatsapp.com/send?phone=+91 6364123461" target="_blank"><span className="fa fa-whatsapp">WhatsApp</span></a>

              <a className="social-pi" href="https://in.pinterest.com/niraamayaretreats/" target="_blank"><span className="fa fa-pinterest">Pinterest</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="col-xs-12 footer-row footer_navbar_wrapper">
  <div className="clearfix">
    <nav className="footer_navbar scroll">
      <ul className="nav navbar-nav flex flex-row justify-center flex-wrap gap-4 py-6">
        <li className="second-li"><a className="" href="././">Home</a></li>
        <li className="second-li"><a className="" href="./about-us/about-us.html">About Us</a></li>
        <li className="second-li"><a className="" href="./private-residences.html">Private Residences</a></li>
        <li className="second-li"><a className="" href="./ayurveda-packages.html">Ayurveda Packages</a></li>
        <li className="second-li"><a className="" href="./special-offers.html">Special Offers</a></li>
        <li className="second-li"><a className="" href="./sustainability/sustainability.html">Sustainability</a></li>
        <li className="second-li"><a className="" href="https://newtwb.s3.amazonaws.com/images/niraamayasmart/Niraamaya%20Safety%20Protocols%5E.pdf">COVID-19 Safety Measures</a></li>
        <li className="second-li"><a className="" href="././gallery.html">Gallery</a></li>
        <li className="second-li"><a className="" href="./faqs/covid-19-measures.html">FAQs</a></li>
        <li className="second-li"><a className="" href="./media/media.html">Media</a></li>
        <li className="second-li"><a className="" href="./awards/awards-for-niraamaya-wellness-retreats.html">Awards</a></li><li className="second-li"><a className="" href="./careers/join-us.html">Careers</a></li><li className="second-li"><a className="" href="./privacy-policy/privacy-policy.html">Privacy Policy</a></li>
        <li className="second-li"><a className="active" href="./blog.html">Blog</a></li>
        <li className="second-li"><a className="" href="./contact-us/central-reservations.html">Contact Us</a></li>
      </ul>
    </nav>
  </div>
  </div>
  <div className="comm_cont f_bot">
    <div className="container">
      <div className="col-xs-12 text-center">
        <a href="./sitemap.html" title="click here for sitemap">Sitemap</a><p><a href="//www.simplotel.com" target="_blank">Simplotel - Hotel Website Design &amp; Booking Engine</a></p>
      </div>
    </div>
  </div>
</div>
{/* </div>  */}
</section>
      <div className="text-sm bg-gray-200 py-6 text-gray-700">
        <div className="container">{footer.smallText}</div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
}

export default Footer
