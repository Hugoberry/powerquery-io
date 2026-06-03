---
title: Text.From
---

# Text.From


สร้างค่าข้อความจากค่าที่กำหนด


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

ส่งคืนค่าในรูปแบบข้อความของค่าที่ระบุ

-   `value`: ค่าที่จะแปลงเป็นข้อความ ค่าดังกล่าวอาจเป็น `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` หรือ `binary` หากค่าที่กำหนดคือ `null` ฟังก์ชันนี้จะส่งคืน `null`
-   `culture`: (ไม่บังคับ) วัฒนธรรมที่จะใช้เมื่อแปลงค่าเป็นข้อความ (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
สร้างค่าข้อความจากตัวเลข 3
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
รับข้อความที่เทียบเท่ากับวันที่และเวลาที่ระบุ
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
รับข้อความภาษาเยอรมันที่เทียบเท่ากับวันที่และเวลาที่ระบุ
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
รับค่าไบนารีจากข้อความที่เข้ารหัสเป็นเลขฐานสิบหก และเปลี่ยนค่ากลับไปเป็นข้อความ
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
รับแถวในตารางที่มีข้อมูลสําหรับฝรั่งเศส และแปลงวันที่เป็นข้อความโดยใช้วัฒนธรรมฝรั่งเศส
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
