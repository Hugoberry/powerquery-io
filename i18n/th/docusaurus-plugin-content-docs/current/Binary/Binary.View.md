---
title: Binary.View
---

# Binary.View


## Description

สร้างหรือขยายไบนารีด้วยตัวจัดการที่ผู้ใช้กําหนดเองสําหรับคิวรีและการดําเนินการ


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

ส่งกลับมุมมองของ <code>binary</code> ที่มีการใช้ฟังก์ชันที่ระบุใน <code>handlers</code> แทนลักษณะการทํางานเริ่มต้นของการดําเนินการเมื่อมีการนําการดําเนินการไปใช้กับมุมมอง<br />ถ้ามี <code>binary</code> ฟังก์ชันตัวจัดการทั้งหมดจะเป็นทางเลือก ถ้าไม่ได้ระบุ <code>binary</code> จําเป็นต้องมีฟังก์ชันตัวจัดการ <code>GetStream</code> ถ้าไม่ได้ระบุฟังก์ชันตัวจัดการสําหรับการดําเนินการ ลักษณะการทํางานเริ่มต้นของการดําเนินการจะถูกนําไปใช้กับ <code>binary</code> แทน (ยกเว้นในกรณีของ <code>GetExpression</code>)<br />ฟังก์ชันตัวจัดการต้องส่งกลับค่าที่เทียบเท่ากับผลลัพธ์ของการใช้การดําเนินการกับ <code>binary</code> (หรือมุมมองผลลัพธ์ในกรณีของ <code>GetExpression</code>)<br />ถ้าฟังก์ชันตัวจัดการแสดงข้อผิดพลาด ลักษณะการทํางานเริ่มต้นของการดําเนินการจะถูกนําไปใช้กับมุมมอง<br /><code>Binary.View</code> สามารถใช้เพื่อทําการพับไปยังแหล่งข้อมูล – การแปลคิวรี M เป็นการดําเนินการเฉพาะแหล่งข้อมูล (ตัวอย่างเช่น เมื่อต้องการดาวน์โหลดส่วนของไฟล์)<br />อ้างอิงคู่มือ Custom Connector ของ Power Query ที่เผยแพร่สําหรับคําอธิบายที่สมบูรณ์เพิ่มเติมของ <code>Binary.View</code><br />


## Examples

### Example #1 
สร้างมุมมองพื้นฐานที่ไม่จําเป็นต้องเข้าถึงข้อมูลเพื่อกําหนดความยาว
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
