import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-w-full min-h-screen items-center
    justify-start z-40 mt-16">
      {/* <Navbar /> */}
      <Row1/>
      <Row2/>
    </div>
  );
}
