import LikertInput from "../inputs/LikertInput.jsx";
import MultiChoiceInput from "../inputs/MultiChoiceInput.jsx";
import TextInput from "../inputs/TextInput.jsx";

export default function QuestionStep({ question, answer, setAns, toggleMulti }) {
  return (
    <div>
      <div className="qheader">
        <div className="qmeta">{question.section}</div>
        <h3 className="qtxt">{question.text}</h3>
        {question.sub && <p className="qsub">{question.sub}</p>}
      </div>
      {question.type === "likert" && (
        <LikertInput qid={question.id} value={answer} onChange={setAns} />
      )}
      {question.type === "multi" && (
        <MultiChoiceInput
          qid={question.id}
          options={question.options}
          max={question.max}
          value={answer}
          onToggle={toggleMulti}
        />
      )}
      {question.type === "text" && (
        <TextInput qid={question.id} value={answer} onChange={setAns} />
      )}
    </div>
  );
}
