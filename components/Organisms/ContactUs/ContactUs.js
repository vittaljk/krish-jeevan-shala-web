import {
  FaPhoneVolume,
  FaEnvelopeOpen,
  FaEnvelopeSquare,
} from 'react-icons/fa';

import { GoLocation } from 'react-icons/go';
import * as Molecules from '../../Molecules';

function ContactUs() {
  return (
    <div>
      <div className="grid gap-5 grid-col-[1fr_1fr_1fr]">
        <Molecules.ContactCard
          icon={<FaPhoneVolume color="white" size="100px" />}
          title="Phone"
        >
          test
        </Molecules.ContactCard>
        <Molecules.ContactCard
          icon={<FaEnvelopeSquare color="white" size="100px" />}
          title="Email"
        >
          <a href="mailto:test@test.com">test@test.com</a>
        </Molecules.ContactCard>
        <Molecules.ContactCard
          icon={<GoLocation color="white" size="100px" />}
          title="Address"
        >
          <span>
            No. 46/47, CS Towers, 1st Floor, Thimmaiah Road, 1st Stage, 5th
            Phase, WOC, Shivanagar, Rajajinagar, Bengaluru, Karnataka 560044
          </span>
        </Molecules.ContactCard>
      </div>
      <div>contact form</div>
    </div>
  );
}

export default ContactUs;
