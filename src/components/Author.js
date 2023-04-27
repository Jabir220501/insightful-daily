export default function Author({ firstName, lastName }) {
  return (
    <>
      <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800">
        <span class="text-gray-300">
          {firstName + `${lastName ? lastName : ""}`}
        </span>
      </div>
    </>
  );
}
