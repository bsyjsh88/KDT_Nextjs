const Sum = () => {
  const sum1 = (a: number, b: number) => {
    return a + b;
  };

  const sum2 = (a: number, b: number, c: number, d: number, e: number) => {
    return a + b + c + d + e;
  };

  console.log(sum1(1, 2));
  console.log(sum2(1, 2, 3, 4, 10));
  

  return (
    <>
      <div></div>
    </>
  );
};

export default Sum;
