function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  if (typeof data === "number") {
    return "Not a string";
  }
  
  return "Not a string";

}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ ts ไม่รู้ว่า data เป็นข้อมูลชนิดไหนจึงทำให้เกิด error และไม่ยอมรันโค้ดข้างต้นด้านบน
