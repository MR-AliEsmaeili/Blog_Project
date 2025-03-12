import { TailSpin } from "react-loader-spinner"

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TailSpin width="100" height="100" color="#9280f7" />
    </div>
  )
}

export default Loader
