import HeavyComponent from "./components/HeavyComponent";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <HeavyComponent />
    </main>
  );
}
