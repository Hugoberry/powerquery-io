---
title: Text.TrimStart
---

# Text.TrimStart


ลบอักขระนำหน้าที่ระบุทั้งหมดออก


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการลบอักขระนำหน้าทั้งหมดออกจาก `text` ที่ระบุ ตามค่าเริ่มต้น อักขระช่องว่างนำหน้าทั้งหมดจะถูกลบออก

-   `text`: ข้อความที่จะลบอักขระนำหน้าออก
-   `trim`: แทนที่อักขระช่องว่างที่ถูกตัดแต่งตามค่าเริ่มต้น พารามิเตอร์นี้สามารถเป็นอักขระเดี่ยวหรือรายการอักขระเดี่ยวได้ การดำเนินการตัดแต่งส่วนนำหน้าแต่ละครั้งจะหยุดลงเมื่อพบอักขระที่ไม่ถูกตัดแต่ง


## Examples

### Example #1
เอาช่องว่างนำหน้าออกจาก " a b c d "
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
ลบเลขศูนย์นำหน้าออกจากข้อความที่ใช้แทนตัวเลข
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
ลบอักขระช่องว่างภายในนำหน้าออกจากชื่อบัญชีที่มีความกว้างคงที่
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
