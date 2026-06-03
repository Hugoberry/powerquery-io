---
title: Text.Trim
---

# Text.Trim


ลบอักขระนำหน้าและต่อท้ายที่ระบุทั้งหมดออก


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการลบอักขระนำหน้าและต่อท้ายทั้งหมดออกจาก `text` ที่ระบุ ตามค่าเริ่มต้น อักขระช่องว่างนำหน้าและต่อท้ายทั้งหมดจะถูกลบออก

-   `text`: ข้อความที่จะลบอักขระนำหน้าและต่อท้ายออก
-   `trim`: แทนที่อักขระช่องว่างที่ถูกตัดแต่งตามค่าเริ่มต้น พารามิเตอร์นี้สามารถเป็นอักขระเดี่ยวหรือรายการอักขระเดี่ยวได้ การดำเนินการตัดแต่งส่วนนำหน้าและต่อท้ายแต่ละครั้งจะหยุดลงเมื่อพบอักขระที่ไม่ถูกตัดแต่ง


## Examples

### Example #1
เอาช่องว่างนำหน้าและต่อท้ายออกจาก " a b c d "
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
ลบเลขศูนย์นำหน้าและต่อท้ายออกจากข้อความที่ใช้แทนตัวเลข
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
ลบวงเล็บเหลี่ยมนำหน้าและต่อท้ายออกจากแท็ก HTML
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
ลบอักขระพิเศษที่ใช้รอบสถานะการขายที่รอดำเนินการ
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
