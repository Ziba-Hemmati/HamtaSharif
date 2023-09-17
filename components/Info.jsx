const deviceID = "rasp-pi-pico";
const firmwareVersion = "2.1.0";
const processor = "Cortex M";

const Info = ({ toggle }) => {
  return toggle ? (
    <div className="transition-transform translate-x-14 duration-700">
      <div>
        deviceID : <span> {deviceID} </span>
      </div>
      <div className="my-10">
        firmwareVersion : <span> {firmwareVersion} </span>
      </div>
      <div>
        processor : <span> {processor} </span>
      </div>
    </div>
  ) : (
    <div className="ml-14">
      Double click board to see the information
    </div>
  );
};

export default Info;
