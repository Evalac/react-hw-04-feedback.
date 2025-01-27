function FeedBackOption({ incrementGood, incrementBad, incrementNeutral }) {
  return (
    <>
      <button type="button" onClick={incrementGood}>
        Good
      </button>
      <button type="button" onClick={incrementNeutral}>
        Neutral
      </button>
      <button type="button" onClick={incrementBad}>
        Bad
      </button>
    </>
  );
}

export { FeedBackOption };
