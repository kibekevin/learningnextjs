import { Metadata } from "next";
import Hello from "../components/hello"


export const metadata: Metadata = {
  title: "Home | Learn Next JS",
  description: "Understand every concept of Next JS",
};

export default function Home() {
    console.log('what am I? server/client?')
  return (
    <>
        <h1 className="text-3xl">Welcome Home</h1>
        <Hello/>
    </>
  )
}
