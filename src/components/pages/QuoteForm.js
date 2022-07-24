import React, {useState} from 'react';
import '../../App.css';
import Section2 from '../Section2';
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
            {!isSubmitted ? <Section2 submitForm=
              {submitForm}/> : <FormSuccess/>}
        </div>
        </>
      );
    }

export default QuoteForm;
    