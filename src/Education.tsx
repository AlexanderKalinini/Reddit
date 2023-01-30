import React from "react";

const log = console.log;
export function MyHooks({ title }: { title: string }) {
  // без второго аргумента отработает на монтирование и размонтирование
  React.useEffect(() => {
    log("DidMount");
    log("WillUpdate");
  });
  //с пустым вторым аргументом будет вызываться useEffect при каждом обновлении и при return возвращает функцию при размонтировании
  React.useEffect(() => {
    log("DidMount");
    return () => log("WillUnmount");
  }, []);
  // отработает при изменении пропа указанного во втором аргументе
  React.useEffect(() => {
    log("WilReciveProp");
  }, [title]);
  return <div>{title}</div>;
}

function pipe<U>(fn: Function[]) {
  return function(initialValue: any):U {
    return fn.reduce((previosValue, fn) => fn(previosValue), initialValue);
  };
}
