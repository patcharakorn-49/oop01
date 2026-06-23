let productName: string = "รองเท้า";
let pricePerUnit: number = 950;
let quantity: number = 2;
let isMember: boolean = false;


let totalPrice: number = pricePerUnit * quantity


let hasDiscount: boolean = (totalPrice > 1000) || isMember;


let discount: number = hasDiscount ? totalPrice * 0.10 : 0;
let finalPrice: number = totalPrice - discount;

console.log("========== รายงานสรุปยอดเงิน ==========");
console.log(ชื่อสินค้า: ${productName} (จำนวนที่ซื้อ: ${quantity} ชิ้น));
console.log(ราคารวมทั้งหมด: ${totalPrice} บาท);
console.log(ได้รับส่วนลดหรือไม่: ${hasDiscount});
console.log(ราคาที่ต้องจ่ายจริง: ${finalPrice} บาท);
console.log("=====================================");