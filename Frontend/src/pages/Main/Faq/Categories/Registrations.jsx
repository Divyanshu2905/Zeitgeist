import Questions from "../Questions";
export default function Registrations() {
  return (
    <div className="questions-wrapper">
      <Questions
        ques="When is the festival happening and how long will it last?"
        ans="The 8th edition of Zeitgeist will span 3rd to 5th November. Get ready for this 3-day exhilarating fiesta."
      />
      <Questions
        ques="How can i register for zeitgeist?"
        ans="Entry pass is required for all those attending the festival.You can get it on the website or the main gate of the campus during the entry to the fest. Some events require participation fee. Registration for such events will be done on the website itself."
      />
      <Questions
        ques="Is the festival open to people of all ages?"
        ans="All attendees are welcome to the fest."
      />
      <Questions
        ques="We are a group of friends not participating in any of the competitions and just coming to Zeitgeist '23 to have fun. Would we be allowed?"
        ans="Yes you are welcome, provided you get the entry pass."
      />
      <Questions
        ques="Where should I report first after reaching the venue?"
        ans="The registration kiosk at the main gate will provide you with all the printed passes and brochures you need and have opted for at entry, on verification of your registration. Then the hospitality team will guide you through the campus and the duration of the fest."
      />
      <Questions
        ques="If I have further questions, who to contact and how?"
        ans="Before the fest, you can contact the organizing team under the Teams tab, and there will also be a hospitality helpline active for Zeitgeist."
      />
    </div>
  );
}
