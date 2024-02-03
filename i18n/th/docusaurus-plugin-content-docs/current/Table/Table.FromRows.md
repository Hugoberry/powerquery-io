---
title: Table.FromRows
---

# Table.FromRows


## Description

สร้างตารางจากรายการของค่าแถว รายการของชื่อคอลัมน์ที่เลือกได้หรือชนิดตารางสามารถระบุเป็นอาร์กิวเมนต์ที่สองได้


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

สร้างตารางจากรายการ <code>rows</code> ซึ่งแต่ละองค์ประกอบของรายการเป็นรายการภายในที่มีค่าคอลัมน์สำหรับแถวเดียว สามารถระบุรายการตัวเลือกของชื่อคอลัมน์หรือชนิดตารางเป็นอาร์กิวเมนต์ที่สองได้ <code>columns</code>


## Examples

### Example #1 
ส่งคืนตารางพร้อมคอลัมน์ [CustomerID] ที่มีค่า \{1, 2} คอลัมน์ [Name] ที่มีค่า \{&#34;Bob&#34;, &#34;Jim&#34;} และคอลัมน์ [Phone] ที่มีค่า \{&#34;123-4567&#34;, &#34;987-6543&#34;}
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
ส่งคืนตารางพร้อมคอลัมน์ [CustomerID] ที่มีค่า \{1, 2} คอลัมน์ [Name] ที่มีค่า \{&#34;Bob&#34;, &#34;Jim&#34;} และคอลัมน์ [Phone] ที่มีค่า \{&#34;123-4567&#34;, &#34;987-6543&#34;} โดยที่ [CustomerID] เป็นชนิดตัวเลข และ [Name] และ [Phone] เป็นชนิดตัวอักษร
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
