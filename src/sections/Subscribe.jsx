// import { Button } from "../components";

import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md xl:max-w-3xl w-full font-palanquin font-bold'>
        Sign Up for <span className='text-coral-red'> Updates </span>& Newsletter
       
      </h3>
      <div className="flex items-center max-sm:justify-center border-2 border-slate-gray lg:max-w-[80%] w-full gap-5 p-2.5 rounded-full max-sm:w-full ">
        <input type="text" placeholder="subscribe@shoestopper.com" className="input border-0" />
        <div className="max-sm:justify-end  flex items-center max-sm:w-full">
            <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;