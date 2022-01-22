import { v4 as uuidv4 } from "uuid";

const data = {
  personal: {
    name: "Pål Benum",
    title: "Kuk på heltid",
    phone: "420 69 420",
    email: "paalbenom@notgmail.com",
    location: "Hos bibba, Trondheim",
  },
  description:
    "paiejfbaqoefna o3no no naeofdna ownoei nq3oi noq3i nqoi nq3or noq3nr oqurnqh3r pqinfsrpignosrGOiwn owiu4 Pi piNR Oqirn owifnwoI Nwp nwi nwp N",
  experience: [
    {
      id: uuidv4(),
      position: "Software Engineer",
      company: "A company",
      startDate: "2018",
      endDate: "Present",
      desc: "osaiefn ieqnfo iq3ni qoi n qpefo qm3fpqom rpq3orm qå3pmr pqn3rpq frpqo3 q,ro,wrigjsrpognw s",
    },
    {
      id: uuidv4(),
      position: "Software Engineer",
      company: "A company",
      startDate: "2018",
      endDate: "Present",
      desc: "osaiefn ieqnfo iq3ni qoi n qpefo qm3fpqom rpq3orm qå3pmr pqn3rpq frpqo3 q,ro,wrigjsrpognw s",
    },
    {
      id: uuidv4(),
      position: "Software Engineer",
      company: "A company",
      startDate: "2018",
      endDate: "Present",
      desc: "osaiefn ieqnfo iq3ni qoi n qpefo qm3fpqom rpq3orm qå3pmr pqn3rpq frpqo3 q,ro,wrigjsrpognw s",
    },
  ],
  education: [
    {
      id: uuidv4(),
      course: "Something inportant",
      university: "A company",
      startDate: "2018",
      endDate: "Present",
    },
    {
      id: uuidv4(),
      course: "Something inportant",
      university: "A company",
      startDate: "2018",
      endDate: "Present",
    },
  ],
};

export default data;
