import React, {useState}from 'react';
import '../../App.css';
import Section2 from '../Section2';
import QuoteUserForm from '../QuoteUserForm';
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
            {!isSubmitted ? <QuoteUserForm submitForm=
              {submitForm}/> : <FormSuccess/>}
        </div>
        </>
      );
    }

export default QuoteForm;