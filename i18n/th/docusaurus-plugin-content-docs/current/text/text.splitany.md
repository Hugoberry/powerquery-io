---
title: Text.SplitAny
---

# Text.SplitAny


ส่งกลับรายการค่าข้อความที่แยกบนอักขระใดๆ ในตัวคั่น


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

ส่งคืนรายการค่าข้อความที่เป็นผลลัพธ์จากการแยกค่าข้อความตามอักขระใดๆ ที่ระบุในตัวคั่น

-   `text`: ค่าข้อความที่จะแยก
-   `separators`: อักขระตัวคั่นที่ใช้ในการแยกข้อความ


## Examples

### Example #1
สร้างรายการจากข้อความที่กำหนดโดยใช้อักขระตัวคั่นที่ระบุ
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
