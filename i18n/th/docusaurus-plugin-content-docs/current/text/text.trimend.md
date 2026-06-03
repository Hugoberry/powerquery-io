---
title: Text.TrimEnd
---

# Text.TrimEnd


ลบอักขระต่อท้ายที่ระบุทั้งหมดออก


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการลบอักขระต่อท้ายทั้งหมดออกจาก `text` ที่ระบุ ตามค่าเริ่มต้น อักขระช่องว่างต่อท้ายทั้งหมดจะถูกลบออก

-   `text`: ข้อความที่จะลบอักขระต่อท้ายออก
-   `trim`: แทนที่อักขระช่องว่างที่ถูกตัดแต่งตามค่าเริ่มต้น พารามิเตอร์นี้สามารถเป็นอักขระเดี่ยวหรือรายการอักขระเดี่ยวได้ การดำเนินการตัดแต่งส่วนต่อท้ายแต่ละครั้งจะหยุดลงเมื่อพบอักขระที่ไม่ถูกตัดแต่ง


## Examples

### Example #1
เอาช่องว่างต่อท้ายออกจาก " a b c d "
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
ลบเลขศูนย์ต่อท้ายออกจากข้อความที่ใช้แทนจำนวนจุดทศนิยมลอยตัวที่เติมช่องว่างภายใน
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
ลบอักขระช่องว่างภายในต่อท้ายออกจากชื่อบัญชีที่มีความกว้างคงที่
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
