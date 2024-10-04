import { CONTACT } from "../constants";

const Contacts = () => {
  return (
    <div className=" border-t border-stone-900 pb-20">
      <h2 className="text-center text-4xl my-10">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">{CONTACT.email}</p>
      </div>
    </div>
  );
};
export default Contacts;
