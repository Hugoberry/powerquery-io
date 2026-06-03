---
title: Text.Combine
---

# Text.Combine


เชื่อมรายการของค่าข้อความเข้ากับค่าข้อความค่าใดค่าหนึ่ง


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการรวมรายการค่าของข้อความ `texts` ลงในค่าข้อความเดียว ค่า `null` ใดๆ ที่แสดงอยู่ `texts` จะถูกละเว้น สามารถระบุ `separator` เพิ่มเติมที่ใช้ในข้อความที่รวมขั้นสุดท้ายได้


## Examples

### Example #1
รวมค่าข้อความ "Seattle" และ "WA"
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
รวมค่าข้อความ "Seattle" และ "WA" โดยคั่นด้วยเครื่องหมายจุลภาคและช่องว่าง
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
รวมค่า "Seattle", `null` และ "WA" โดยคั่นด้วยเครื่องหมายจุลภาคและช่องว่าง (โปรดทราบว่า `null` จะถูกละเว้น)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
รวมชื่อ ชื่อกลาง (ถ้ามี) และนามสกุลเป็นชื่อเต็มของบุคคล
```powerquery
let
    Source = Table.FromRecords({
        [First Name = "Doug", Middle Initial = "J", Last Name = "Elis"],
        [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew"],
        [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova"]
    }),
    FullName = Table.AddColumn(Source, "Full Name", each Text.Combine({[First Name], [Middle Initial], [Last Name]}, " "))
in
    FullName
```

Result: 
```powerquery
Table.FromRecords({
    [First Name = "Doug", Middle Initial = "J", Last Name = "Elis", Full Name = "Doug J Elis"],
    [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew", Full Name = "Anna M Jorayew"],
    [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova", Full Name = "Rada Mihaylova"]
})
```




## Category
Text.Transformations
