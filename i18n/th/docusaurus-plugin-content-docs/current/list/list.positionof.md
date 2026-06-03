---
title: List.PositionOf
---

# List.PositionOf


ส่งกลับออฟเซตของค่าในรายการ


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

ส่งกลับออฟเซตที่ค่าที่ระบุปรากฏในรายการ ส่งกลับ -1 ถ้าค่าไม่ปรากฏขึ้น

-   `list`: รายการที่จะค้นหา
-   `value`: ค่าที่จะค้นหาในรายการ
-   `occurrence`: (เพิ่มเติม) การเกิดขึ้นเฉพาะในรายงาน ค่านี้สามารถเป็น `Occurrence.First`, `Occurrence.Last` หรือ `Occurrence.All` ถ้าไม่ได้ระบุ `occurrence` ไว้ `Occurrence.First` จะถูกใช้
-   `equationCriteria`: (เพิ่มเติม) ระบุวิธีการกำหนดความเท่ากันเมื่อเปรียบเทียบค่า พารามิเตอร์นี้อาจเป็นฟังก์ชันตัวเลือกคีย์ ฟังก์ชันตัวเปรียบเทียบ หรือรายการที่มีทั้งตัวเลือกคีย์และตัวเปรียบเทียบ


## Examples

### Example #1
หาตำแหน่งในรายการ \{1, 2, 3\} ที่ค่า 3 ปรากฏ
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
ค้นหาตำแหน่งในรายการอินสแตนซ์ทั้งหมดของวันที่ตั้งแต่ปี 2022
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
ค้นหาตำแหน่งในรายการการปรากฏครั้งล่าสุดของคำว่า dog โดยไม่สนใจตัวพิมพ์ใหญ่-เล็ก
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
ค้นหาตำแหน่งในรายการที่อยู่ภายในสองหน่วยของตัวเลข 28
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
