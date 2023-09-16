const deviceID = "rasp-pi-pico";
const firmwareVersion = "2.1.0";
const processor = "Cortex M";

const Info = () => {
  return (
    <div className="ml-14">
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
  );
};

export default Info;
