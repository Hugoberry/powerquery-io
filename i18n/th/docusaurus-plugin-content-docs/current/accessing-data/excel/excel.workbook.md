---
title: Excel.Workbook
---

# Excel.Workbook


ส่งกลับเนื้อหาของเวิร์กบุ๊ก Excel


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

ส่งกลับเนื้อหาของเวิร์กบุ๊ก Excel    <ul>     <li> <code>useHeaders</code> สามารถเป็นค่า null ค่าเชิงตรรกะ (จริง/เท็จ) ที่ระบุว่าแถวแรกของแต่ละตารางที่ส่งกลับควรถือเป็นส่วนหัวหรือระเบียนที่เลือกได้ ค่าเริ่มต้น: เท็จ</li>     <li> <code>delayTypes</code> สามารถเป็น null หรือค่าเชิงตรรกะ (จริง/เท็จ) ที่ระบุว่าคอลัมน์ของแต่ละตารางที่ส่งกลับควรไม่ระบุชนิดหรือไม่ ค่าเริ่มต้น: เท็จ</li>    </ul>    ถ้ามีการระบุระเบียนสำหรับ <code>useHeaders</code> (และ <code>delayTypes</code> เป็น null) เขตข้อมูลระเบียนต่อไปนี้อาจมี:    <ul>     <li> <code>UseHeaders</code>: สามารถเป็น null หรือค่าเชิงตรรกะ (จริง/เท็จ) ที่ระบุว่าแถวแรกของแต่ละตารางที่ส่งกลับควรถือเป็นส่วนหัวหรือไม่ ค่าเริ่มต้น: เท็จ</li>     <li> <code>DelayTypes</code>: สามารถเป็น null หรือค่าเชิงตรรกะ (จริง/เท็จ) ที่ระบุว่าคอลัมน์ของแต่ละตารางที่ส่งกลับควรไม่ระบุชนิดหรือไม่ ค่าเริ่มต้น: เท็จ</li>     <li> <code>InferSheetDimensions</code>: อาจเป็น null หรือค่าเชิงตรรกะ (จริง/เท็จ) ที่ระบุว่าควรสรุปพื้นที่ของเวิร์กชีตที่มีข้อมูลหรือไม่โดยการอ่านแผ่นงานเอง แทนที่จะอ่านเมตาดาต้าของมิติจากไฟล์ ซึ่งจะเป็นประโยชน์ในกรณีที่เมตาดาต้าของมิติไม่ถูกต้อง โปรดทราบว่าตัวเลือกนี้รองรับเฉพาะไฟล์ Excel แบบ Open XML เท่านั้น ไม่ใช่ไฟล์ Excel แบบดั้งเดิม ค่าเริ่มต้น: เท็จ</li>    </ul>    


## Examples

### Example #1 
ส่งกลับเนื้อหาของ Sheet1 จากเวิร์กบุ๊ก Excel
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
