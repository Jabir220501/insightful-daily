import React from "react";

function Card(props) {
  return (
    <div class="w-full max-w-full px-3 mb-6 md:w-1/2 md:flex-none md:mb-0 md:w-1/4">
      <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
        <div class="flex-auto p-4">
          <div class="flex flex-row -mx-3">
            <div class="flex-none w-2/3 max-w-full px-3">
              <div>
                <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                  {props.title}
                </p>
                <h5 class="mb-0 font-bold">
                  {props.value}
                  <span class="leading-normal text-sm font-weight-bolder text-lime-500">
                    {props.extraValue}
                  </span>
                </h5>
              </div>
            </div>
            <div class="px-3 text-right basis-1/3">
              <div class="inline-block w-12 h-12 text-center rounded-lg bg-yellow">
                <i class="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
