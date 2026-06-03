---
title: List.Distinct
---

# List.Distinct


ส่งกลับรายการค่าที่ลบค่าที่ซ้ำออก


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

ส่งกลับรายการที่มีค่าทั้งหมดในรายการที่ระบุโดยเอาค่าที่ซ้ํากันออก ถ้ารายการที่ระบุว่างเปล่า ผลลัพธ์จะเป็นรายการว่าง

-   `list`: รายการที่จะดึงค่าที่แตกต่างกันออกมา
-   `equationCriteria`: (ทางเลือก) ระบุวิธีการพิจารณาความเท่าเทียมกันเมื่อเปรียบเทียบค่าต่างๆ พารามิเตอร์นี้อาจเป็นฟังก์ชันตัวเลือกคีย์ ฟังก์ชันตัวเปรียบเทียบ หรือรายการที่มีทั้งตัวเลือกคีย์และตัวเปรียบเทียบ


## Examples

### Example #1
เอาค่าที่ซ้ำออกจากรายการ \{1, 1, 2, 3, 3, 3\}
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
เริ่มต้นที่ตอนท้ายของรายการ ให้เลือกผลไม้ที่มีความยาวข้อความที่ไม่ซ้ำกัน
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
เริ่มต้นที่จุดเริ่มต้นของรายการ ให้เลือกผลไม้ที่ไม่ซ้ำกันโดยไม่สนใจตัวพิมพ์
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
แยกจากรายการของรายการแรกที่มีชื่อประเทศที่ไม่ซ้ำกันโดยไม่สนใจตัวพิมพ์ วางรายการที่แยกในแถวของตารางใหม่
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
