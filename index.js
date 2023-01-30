const Button = (props) => {
  //  Write your code here.
  const { buttonClass, buttonName } = props;
  return <button className={buttonClass}>{buttonName}</button>;
};

const element = (
  //  Write your code here.

  <div className="button-card-container">
    <h1 className="heading">Social Buttons</h1>
    <Button buttonClass="button likeButton" buttonName="Like" />
    <Button buttonClass="button commentButton" buttonName="Comment" />
    <Button buttonClass="button shareButton" buttonName="Share" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
