---
title: Table.View
---

# Table.View


สร้างหรือขยายตารางโดยใช้ตัวจัดการที่กำหนดเองโดยผู้ใช้สำหรับคิวรีและการดำเนินการ


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

ส่งกลับมุมมองของ <code>table</code> ที่มีการใช้ฟังก์ชันที่ระบุใน <code>handlers</code> แทนลักษณะการทํางานเริ่มต้นของการดําเนินการเมื่อมีการนําการดําเนินการไปใช้กับมุมมอง<br />ถ้ามี <code>table</code> ฟังก์ชันตัวจัดการทั้งหมดจะเป็นทางเลือก ถ้าไม่มี <code>table</code> จําเป็นต้องมีฟังก์ชันตัวจัดการ <code>GetType</code> และ <code>GetRows</code> ถ้าไม่ได้ระบุฟังก์ชันตัวจัดการสําหรับการดําเนินการ ลักษณะการทํางานเริ่มต้นของการดําเนินการจะถูกนําไปใช้กับ <code>table</code> แทน (ยกเว้นในกรณีของ <code>GetExpression</code>)<br />ฟังก์ชันตัวจัดการต้องส่งกลับค่าที่เทียบเท่ากับผลลัพธ์ของการใช้การดําเนินการ <code>table</code> (หรือมุมมองผลลัพธ์ในกรณีของ <code>GetExpression</code>)<br />ถ้าฟังก์ชันตัวจัดการแสดงข้อผิดพลาด ลักษณะการทํางานเริ่มต้นของการดําเนินการจะถูกนําไปใช้กับมุมมอง<br /><code>Table.View</code> สามารถใช้เพื่อใช้การพับไปยังแหล่งข้อมูล – การแปลคิวรี M เป็นคิวรีเฉพาะแหล่งข้อมูล (ตัวอย่างเช่น เมื่อต้องการสร้างคําสั่ง T-SQL จากคิวรี M)<br />ดูคู่มือเอกสารตัวเชื่อมต่อแบบกําหนดเองของ Power Query ที่เผยแพร่สําหรับคําอธิบายที่สมบูรณ์มากขึ้นของ <code>Table.View</code><br />


## Examples

### Example #1 
สร้างมุมมองพื้นฐานที่ไม่จําเป็นต้องเข้าถึงแถวเพื่อกําหนดชนิดหรือจํานวนแถว
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
