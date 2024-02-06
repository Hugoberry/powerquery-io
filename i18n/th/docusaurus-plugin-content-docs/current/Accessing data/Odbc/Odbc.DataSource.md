---
title: Odbc.DataSource
---

# Odbc.DataSource


ส่งคืนตารางของตารางและมุมมอง SQL จากแหล่งข้อมูล ODBC 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

ส่งคืนตารางของตารางและมุมมอง SQL จากแหล่งข้อมูล ODBC ที่มีการระบุไว้โดยสตริงการเชื่อมต่อ <code>connectionString</code> <code>connectionString</code> สามารถเป็นข้อความหรือบันทึกข้อมูลการจับคู่ค่าคุณสมบัติ ค่าคุณสมบัติสามารถเป็นข้อความหรือตัวเลข สามารถเพิ่มพารามิเตอร์เรกคอร์ดเสริม <code>options</code> เพื่อระบุคุณสมบัติเพิ่มเติมได้ โดยในเรกคอร์ดสามารถมีเขตข้อมูลต่อไปนี้ได้:    <ul><li><code>CreateNavigationProperties</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างคุณสมบัติการนำทางบนค่าที่ส่งคืนหรือไม่ (ค่าเริ่มต้นคือจริง)</li><li><code>HierarchicalNavigation</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะดูตารางโดยจัดกลุ่มตามชื่อรูปแบบหรือไม่ (ค่าเริ่มต้นคือเท็จ)</li><li><code>ConnectionTimeout</code> : ระยะเวลาที่ควบคุมว่าจะรอนานเพียงใดก่อนที่จะละทิ้งความพยายามที่จะเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นคือ 15 วินาที</li><li><code>CommandTimeout</code> : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นคือสิบนาที</li><li><code>SqlCompatibleWindowsAuth</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างตัวเลือกสตริงการเชื่อมต่อที่สามารถทำงานร่วมกับ SQL Server ได้ สำหรับการรับรองความถูกต้องของ Windows หรือไม่ ค่าเริ่มต้นคือจริง</li></ul>


## Examples

### Example #1 
ส่งกลับตารางและมุมมอง SQL จากสตริงการเชื่อมต่อที่ให้มา
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
