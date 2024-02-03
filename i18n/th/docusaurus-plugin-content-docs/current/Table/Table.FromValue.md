---
title: Table.FromValue
---

# Table.FromValue


## Description

สร้างตารางด้วยคอลัมน์จากค่าที่ระบุ


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

สร้างตารางด้วยคอลัมน์ซึ่งมีค่าหรือรายการของค่าที่ระบุไว้ <code>value</code> อาจมีการระบุพารามิเตอร์บันทึกข้อมูลที่เป็นทางเลือก <code>options</code> เพื่อควบคุมตัวเลือกดังต่อไปนี้:    <ul>    <li> <code>DefaultColumnName</code> : ใช้ชื่อคอลัมน์เมื่อสร้างตารางจากรายการค่าหรือค่าที่การปรับสเกล</li>    </ul>  


## Examples

### Example #1 
สร้างตารางจากค่า 1
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
สร้างตารางจากรายการ
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
สร้างตารางจากค่า 1 พร้อมชื่อคอลัมน์แบบกำหนดเอง
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
