import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./Resume";

export default function ResumePreview() {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Resume />
    </PDFViewer>
  );
}
