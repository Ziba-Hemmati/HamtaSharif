const deviceID = "rasp-pi-pico";
const firmwareVersion = "2.1.0";
const processor = "Cortex M";

const Info = ({ toggle }) => {
  return toggle ? (
    <div className="transition-transform translate-y-10 lg:translate-y-0 lg:translate-x-14 duration-700 text-sm lg:text-base mb-10 lg:mb-0">
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
    <div className="lg:ml-14 mt-10 text-sm lg:text-base">
      Double click board to see the information
    </div>
  );
};

export default Info;
