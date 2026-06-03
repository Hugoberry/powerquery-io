---
title: Text.Split
---

# Text.Split


แยกข้อความออกเป็นรายการค่าข้อความตามตัวคั่นที่ระบุ


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

ส่งกลับรายการค่าข้อความที่เป็นผลลัพธ์จากการแยกค่าข้อความตามตัวคั่นที่ระบุ

-   `text`: ค่าข้อความที่จะแยก
-   `separator`: ตัวคั่นที่ใช้ในการแยกข้อความ ตัวคั่นอาจเป็นได้ทั้งอักขระตัวเดียวหรือลำดับอักขระ หากใช้ลำดับอักขระ ระบบจะแบ่งข้อความเฉพาะในกรณีที่มีลำดับอักขระที่แน่นอนเท่านั้น


## Examples

### Example #1
สร้างรายการจากค่าข้อความ "Name|Address|PhoneNumber" ที่คั่นด้วย "|"
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
สร้างรายการจากค่าข้อความโดยใช้ลำดับอักขระ
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
