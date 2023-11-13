import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer'

const Term = ({isAuth}) => {

  const navigate = useNavigate();

  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);
  
  return (
    <div className='mt-[20vh]'>
      <h2 className='text-center font-extrabold text-4xl'> Terms & Conditions </h2>

      <div className='px-[5vh]  pt-2 lg:px-[35vh] text-[16px]'>
      <h2 className='text-[18px] pt-9'>Last updated: 10/10/2022 </h2>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>1. <span className='underline'> Introduction </span></h2>
        <p className='pt-3'>These Terms of Service <span className='font-bold'>(“Terms”, “Terms of Service”)</span> govern your use of our web pages and our mobile application <span className='font-bold'> (together or individual “Service”)</span> operated by HovorAd.</p>
        <p className='pt-3'>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.</p>
        <p className='pt-3'>Welcome to HovorAd <span className='font-bold'>(“Company”, “we”, “our”, “us”)!</span> As you have just clicked our Terms of Service, please pause, grab a cup of coffee and carefully read the following pages. It will take you approximately 20 minutes.</p>
        <p className='pt-3'>Your agreement with us includes these Terms and our Privacy Policy <span className='font-bold'>(“Agreements”)</span>. You acknowledge that you have read and understood Agreements, and agree to be bound by them.</p>
        <p className='pt-3'>If you do not agree with <span className='font-bold'>(or cannot comply with)</span> these terms, then you may not use the service, however, please feel free to reach out to us via email (brightjonathaninfor@gmail.com) if you have any reservations or concerns. These Terms apply to all visitors, users and others who wish to access or use our Service.</p>
        <p className='pt-3'>Thank you for being responsible.</p>
      </div>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>2. <span className='underline'> Communications </span></h2>
        <p className='pt-3'> By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by reaching out via email. </p>
      </div>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>3. <span className='underline'> Purchases </span></h2>
        <p className='pt-3'>If you wish to purchase any product or service made available through Service <span className='font-bold'>(“Purchase”)</span>, you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
        <p className='pt-3'>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p>
        <p className='pt-3'>We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.</p>
        <p className='pt-3'>We reserve the right to refuse or cancel your sale at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.</p>
        <p className='pt-3'>We reserve the right to refuse or cancel your order upon suspicion of a fraudulent, an unauthorized or otherwise illegal transaction.</p>
        <p className='pt-3'>We are currently unable to reverse processing fees and purchase of products are final.</p>
      </div>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>4. <span className='underline'> Contests, Sweepstakes and Promotions </span></h2>
        <p className='pt-3'>All contests, sweepstakes or other promotions <span className='font-bold'>(collectively, “Promotions”)</span> made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.</p>
      </div>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'> 5. <span className='underline'> Code of Conduct </span> </h2>
        <p> Users are expected to abide by the following Code of Conduct guiding our community:</p>
        <ul>
          <li className='pt-3'><span className='font-bold'> Illegal Activity: </span> We prohibit any form of use of Selar platform for any illegal activity. You are not allowed to use our Platform to engage in any kind of conduct that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US, Nigeria, or your country).</li>
          <p className='pt-3'>In the instance of any illegal activity, such activity will be investigated and the law parties will be bound by may differ depending on the peculiarity of the case and at our sole discretion.</p>
          <li className='pt-3'><span className='font-bold'>Fraud: </span> We have zero tolerance for any form of fraudulent activity or transaction including but not limited to Money Laundering.</li>
          <li className='pt-3'><span className='font-bold'>Bad Code:</span> You shall not use the Selar Platform to transmit, distribute, send, etc. viruses, worms, or any other code that may be deemed dangerous, harmful, or destructive in any manner</li>
          <li className='pt-3'><span className='font-bold'>Spamming:</span> You shall not use the Selar Platform to engage in any activities that will result in sending spam to anyone on the Selar Platform, including Selar (and its employees), Subscribers, and Purchasers</li>
          <li className='pt-3'> <span className='font-bold'>Respect:</span> We encourage users to be civil and respectful at all times</li>
          <li className='pt-3'><span className='font-bold'>Exploitation:</span> You shall not use the Selar Platform to try to gather personal information on anyone, outside of the limited permissible uses for offering your Content</li>
          <li className='pt-3'><span className='font-bold'>Impersonation:</span> You shall not impersonate anybody.. any of its employees, users of HovorAd or members of the general public.</li>
          <p className='pt-3'>Upon discovery of impersonation,we reserve the right to deactivate the infringing account immediately.</p>
          <li className='pt-3'><span className='font-bold'>Data Mining or Bots:</span> You shall not use any data mining, robots, or similar data gathering or extraction methods; and</li>
          <li className='pt-3'>Use Other Than Intended: You shall not use the Platform or any content contained on the Platform for any purposes other than intended.</li>
          <p className='pt-3'>Upon violation of our Code of Conduct, we reserve the right to delete a user's account and Content from the Selar Platform. Whether conduct violates our Code of Conduct will be determined in HovorAd sole discretion.</p>
        </ul>
      </div>


      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>6. <span className='underline'> Content </span></h2>
        <p className='pt-3'>Our Service allows users to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material <span className='font-bold'> (“Content”)</span>. Users are responsible for Content that they post on or through Service, including its legality, reliability, and appropriateness.</p>
        <p className='pt-3'>By posting Content on or through Service, User represents and warrants that: (i) Content is their Intellectual Property and/or they have the right or licence to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not infringe on the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity- tangible or intangible. We reserve the right to delete the account of anyone found to be infringing on any of the above rights.</p>
        <p className='pt-3'>You reserve any and all of your rights to any Content you submit, post or display on or through Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through Service. However, by posting Content using Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through Service. You agree that this license includes the right for us to make your Content available to other users of Service, who may also use your Content subject to these Terms.</p>
        <p className='pt-3'>Kendyson Solutions has the right but not the obligation to monitor and edit all Content provided by users.</p>
      </div>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>7. <span className='underline'> Prohibited Uses </span></h2>
        <p className='pt-3'>You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>
        <p className='pt-3'> In any way that violates any applicable national or international law or regulation. </p>
        <p className='pt-3'>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise </p>
        <p className='pt-3'>To transmit, or procure the sending of, any advertising or promotional material, including any <span className='font-bold'>“junk mail”, “chain letter,” “spam,”</span> or any other similar solicitation.</p>
        <p className='pt-3'>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</p>
        <p className='pt-3'>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</p>
        <p className='pt-3'>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.</p>
      </div>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>8. <span className='underline'> Copyright Policy </span></h2>
        <p className='pt-3'>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights <span className='font-bold'> (“Infringement”) </span> of any person or entity.</p>
        <p className='pt-3'>You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.</p>
        <p className='pt-3'>You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.</p>
      </div>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>9. <span className='underline'> Error Reporting and Feedback </span></h2>
        <p className='pt-3'>You may provide us directly at brightjonathaninfor@gmail with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service <span className='font-bold'>(“Feedback”)</span>. You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use <span className='font-bold'> (including copy, modify, create derivative works, publish, distribute and commercialize)</span> Feedback in any manner and for any purpose.</p>
      </div>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>10. <span className='underline'> Links To Other Web Sites </span></h2>
        <p className='pt-3'>Our Service may contain links to third party web sites or services that are not owned or controlled by HovorAd </p>
        <p className='pt-3'>HovorAd has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
        <p className='pt-3'>YOU ACKNOWLEDGE AND AGREE THAT HovorAd SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.</p>
        <p className='pt-3'>WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.</p>
      </div>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>11. <span className='underline'> Acknowledgement </span></h2>
        <p className='pt-3'>BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM</p>
      </div>

      <div>
        <h2 className='mt-9 text-[20px] font-semibold'>12. <span className='underline'> Contact Us</span></h2>
        <p className='pt-3'>Please send your feedback, comments, requests for technical support: By email: brightjonathan@gmail.com</p>
      </div>

      </div>
      <Footer />  
    </div>
  )
}

export default Term


