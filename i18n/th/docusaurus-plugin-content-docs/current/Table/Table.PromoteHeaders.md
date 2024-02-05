---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

เลื่อนระดับแถวแรกของค่าเป็นส่วนหัวคอลัมน์ใหม่ (เช่น ชื่อคอลัมน์)


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

เลื่อนระดับแถวแรกของค่าเป็นส่วนหัวคอลัมน์ใหม่ (เช่น ชื่อคอลัมน์) ค่าเริ่มต้น เฉพาะค่าที่เป็นข้อความหรือตัวเลขจะถูกเลื่อนระดับเป็นส่วนหัว ตัวเลือกที่ถูกต้อง:    <div>      <code>PromoteAllScalars</code> : หากตั้งเป็น<code>จริง</code> ค่าสเกลทั้งหมดในแถวแรกจะถูกเลื่อนระดับเป็นส่วนหัวโดยใช้ <code>ภาษา</code> หากระบุ (หรือตำแหน่งเอกสารปัจจุบัน)    สำหรับค่าที่ไม่สามารถเปลี่ยนเป็นข้อความได้ จะใช้เป็นชื่อคอลัมน์เริ่มต้น    </div>    <div>    <code>ภาษา</code> : ชื่อภาษาที่ระบุภาษาสำหรับข้อมูล    </div>  


## Examples

### Example #1 
ยกระดับแถวแรกของค่าในตาราง
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
เลื่อนระดับแถวแรกของค่าเป็นส่วนหัวคอลัมน์ใหม่
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
