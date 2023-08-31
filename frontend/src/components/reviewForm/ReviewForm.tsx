import { Form, Button } from "react-bootstrap";

const ReviewForm: React.FC<{
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  revText: React.MutableRefObject<HTMLTextAreaElement | null>;
  labelText: string;
  defaultValue: string;
}> = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextArea">
          <Form.Label>{labelText}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            ref={revText}
            defaultValue={defaultValue}
          ></Form.Control>
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ReviewForm;
