import React from "react";
import { VscEyeClosed } from "react-icons/vsc";

const APYStatsModal = ({ openModal }) => {
  return (
    <div className="APYStatsModal">
      <div className="closer">
        <VscEyeClosed className="close-btn" onClick={openModal} />
      </div>
      <div className="modal-apr">
        <h4>APR: </h4>
        <h4>50%</h4>
      </div>
      <div className="modal-liq">
        <h4>Liquidity: </h4>
        <h4>$159,503</h4>
      </div>
      <div className="modal-contract">
        <h4>
          <a
            href="https://bscscan.com/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Contract
          </a>
        </h4>
      </div>
    </div>
  );
};

export default APYStatsModal;
