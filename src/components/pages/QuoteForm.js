import React, {useState}from 'react';
import '../../App.css';
import Section2 from '../Section2';
import UserQuoteForm from '../UserQuoteForm';
import FormSuccess from '../FormSuccess';
import '../QuoteForm.css';

function QuoteForm(){
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(){
    setIsSubmitted(true);
  }
    return (
        <>
           <div>
            {!isSubmitted ? <UserQuoteForm submitForm=
              {submitForm}/> : <FormSuccess/>}
        </div>
        </>
      );
    }

export default QuoteForm;