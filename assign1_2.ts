let bookTitle: string = "TypeScript Essentials";
let isbn: string = "978-3-16-148410-0";
let price: number = 550;

let bookSummary: [string, number] = [bookTitle, price];


let isAvailable: boolean = true;




let discountRate: number = 0.15;
let finalPrice: number = price * (1 - discountRate);


let isPremium: boolean = price > 500;


let canDisplay: boolean = isPremium && isAvailable;


console.log(========== ระบบจัดการข้อมูลหนังสือ ==========);
console.log(ชื่อหนังสือ: ${bookSummary[0]}); 
console.log(รหัส ISBN: ${isbn});
console.log(ราคาปกติ: ${bookSummary[1]} บาท); 
console.log(ราคาโปรโมชัน (ลด 15%): ${finalPrice.toFixed(2)} บาท);
console.log(สถานะหนังสือพร้อมใช้งาน: ${isAvailable});
console.log(เป็นหนังสือระดับ Premium: ${isPremium});
console.log(คำแนะนำการจัดวาง: ${canDisplay ? "สามารถจัดแสดงที่หน้าตู้โชว์ได้" : "จัดวางที่ชั้นหนังสือปกติ"});
console.log(===========================================);