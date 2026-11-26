type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return user.age !== undefined && user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ การที่ age?: number เครื่องหมายคำถาม อาจจะทำให้ค่า age มีค่าเป็นตัวเลขหรือไม่มีค่าเลยก้ได้
