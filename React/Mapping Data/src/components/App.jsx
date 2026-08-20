import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";
function createEntry(emojiTerm) {
  return (
    <Emoji
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}
export default App;
