import Questions from "../Questions";
export default function Competitions() {
  return (
    <div className="questions-wrapper">
      <Questions
        ques="Are cars allowed inside?"
        ans="No private vehicles will be allowed inside premises."
      />
      <Questions
        ques="What are the restrictions on entrance and exit of campus during Zeitgeist '23?"
        ans="imings of entry and exit mentioned in your brochures will be strictly followed."
      />
      <Questions
        ques="How do I get details/rulebooks for any particular event?"
        ans="All events and their rulebooks will be on the website itself, and registration can be done online as well."
      />
      <Questions
        ques="How do I submit my entries for online competitions?"
        ans="Rulebooks will contain google forms for submission."
      />
      <Questions
        ques="Is there a helpline I can call if I need some clarification during the fest?"
        ans="Yes there is a hospitality helpline: "
      />
    </div>
  );
}
