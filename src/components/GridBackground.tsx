export default function GridBackground() {
  const gridSize = 30;

  const cells = Array.from({ length: gridSize * gridSize }, (_, i) => (
    <div
      key={i}
      className="aspect-square w-full h-full border border-gray-300 hover:bg-blue-400 transition duration-200"
    />
  ));

  return (
    <div className="fixed inset-0 z-0 w-screen h-screen grid grid-cols-30 grid-rows-30 bg-white">
      {cells}
    </div>
  );
}
