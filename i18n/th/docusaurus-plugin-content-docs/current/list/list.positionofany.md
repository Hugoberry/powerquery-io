---
title: List.PositionOfAny
---

# List.PositionOfAny


ส่งกลับออฟเซตแรกของค่าในรายการ


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

ส่งกลับออฟเซตที่หน่วยข้อมูลจากรายการค่าที่ระบุปรากฏในรายการ ส่งกลับ -1 ถ้าไม่พบเหตุการณ์

-   `list`: รายการที่จะค้นหา
-   `values`: รายการของค่าที่จะค้นหาในรายการต้นฉบับ
-   `occurrence`: (เพิ่มเติม) การเกิดขึ้นเฉพาะในรายงาน ค่านี้สามารถเป็น `Occurrence.First`, `Occurrence.Last` หรือ `Occurrence.All`. ถ้าไม่ได้ระบุ `occurrence` ไว้ `Occurrence.First` จะถูกใช้
-   `equationCriteria`: (เพิ่มเติม) ระบุวิธีการกำหนดความเท่ากันเมื่อเปรียบเทียบค่า พารามิเตอร์นี้อาจเป็นฟังก์ชันตัวเลือกคีย์ ฟังก์ชันตัวเปรียบเทียบ หรือรายการที่มีทั้งตัวเลือกคีย์และตัวเปรียบเทียบ


## Examples

### Example #1
หาตำแหน่งแรกในรายการ \{1, 2, 3\} ที่ค่า 2 หรือ 3 ปรากฏ
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
ค้นหาตำแหน่งในรายการอินสแตนซ์ทั้งหมดของวันที่ตั้งแต่ปี 2022 หรือ 2023
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
ค้นหาตำแหน่งในรายการการปรากฏครั้งล่าสุดของคำว่า dog หรือ cat โดยไม่สนใจตัวพิมพ์ใหญ่-เล็ก
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
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
ค้นหาตําแหน่งใดๆ ในรายการที่อยู่ภายในสองหน่วยของตัวเลข 17 หรือ 28
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
