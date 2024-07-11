import React from 'react';

const Articals = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Expertise in Taxation
            </h2>
            <p className="text-gray-700 mb-4">
              Our teams are well versed with issues affecting both Foreign and Indian businesses. The teams are continuously engaged in upgrading skills, thereby offering comprehensive, efficient, and pragmatic tax strategies. These assignments are monitored at a senior level, and adequate care is taken to ensure a high level of skill and experience.
            </p>
            <p className="text-gray-700 mb-4">
              Our teams provide complete handholding in preparation for a tax enquiry, investigation, or appellate matter and work as business partners in dealing with regulatory authorities. Transfer pricing professionals provide effective guidance to your finance teams in maintaining country files and related matters.
            </p>
            <p className="text-gray-700 mb-4">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consectetur dicta enim sequi quae quasi aperiam officia nesciunt similique a! Corrupti necessitatibus, eos cum ad explicabo numquam cumque ipsa modi.
            </p>
           
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://www.livemint.com/lm-img/img/2023/06/21/600x338/ITR_filing_1687336567669_1687336574852.JPG" alt="Taxation Image" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='mt-10'>
        <b>Planning and Advisory –</b> Tax planning for optimizing the overall tax structure, reviewing business transactions and assisting contract structuring, risk analysis, secondment arrangements <br />
<b>International Taxation –</b> International tax treaties (DTAA), handling of transnational company affairs, international tax planning covering inbound and outbound investments. <br />
<b>Transfer Pricing –</b> Determination of financial transactions at arm’s length price, ensuring transactions adhere to regulatory framework and assist in filing report under section 92E of the Income Tax Act, 1961. <br />
<b>Indirect Taxation –</b> Advisory, compliance and audit under Goods and Services Tax (GST) in India along with pre-GST taxes. <br />
<b>Tax Controversy & Dispute Resolution –</b> Managing tax litigations and assistance in resolving income tax disputes. <br />
        </div>
      </div>
    </section>
  );
};

export default Articals;
