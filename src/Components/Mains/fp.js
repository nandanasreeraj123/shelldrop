import React from "react";
import "./fp.css";
import Drag from "./drag";
export default function MainPage() {
  return (
    <div className="logss">
      <p className="greens">HIDE YOURSELF WITH</p>
      <p className="heads">ALAMB TECHIES</p>
      <p className="greens">AND PROTECT YOUR DATA</p>
      <div className="flexes">
        <div className="db">
          <Drag></Drag>
        </div>
        <div className="texts">
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>{" "}
        </div>
      </div>
      <p className="greens">WE ENSURE YOU</p>
      <div className="flexes">
        <div className="db">
          <p className="texts1"> Point 1 description</p>
        </div>
        <div className="db">
        <p className="texts1"> Point 1 description</p>
        </div>
        <div className="db">
        <p className="texts1">Point 1 description</p>
        </div>
        
      </div>
      <p className="greens">YOUR FILES</p>
      <div className="flexes files">
          <div>
              <p> FILENAME</p>
          </div>
          <div>
              <p> LINK</p>
          </div>
          <div>
              <p> ENCRYPTED</p>
          </div>
          <div>
              <p> #</p>
          </div>
      </div>
      <div className="flexes files">
          <div>
              <p> FILENAME</p>
          </div>
          <div>
              <p> LINK</p>
          </div>
          <div>
              <p> ENCRYPTED</p>
          </div>
          <div>
              <p> #</p>
          </div>
      </div>
      <div className="flexes files">
          <div>
              <p> FILENAME</p>
          </div>
          <div>
              <p> LINK</p>
          </div>
          <div>
              <p> ENCRYPTED</p>
          </div>
          <div>
              <p> #</p>
          </div>
      </div>
      <div className="flexes files">
          <div>
              <p> FILENAME</p>
          </div>
          <div>
              <p> LINK</p>
          </div>
          <div>
              <p> ENCRYPTED</p>
          </div>
          <div>
              <p> #</p>
          </div>
      </div>
    </div>
  );
}
