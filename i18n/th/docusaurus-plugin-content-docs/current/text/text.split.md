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

ส่งกลับรายการค่าข้อความที่เป็นผลลัพธ์จากการแยกค่าข้อความ <code>text</code> ตามตัวคั่นที่ระบุ <code>separator</code>


## Examples

### Example #1 
สร้างรายการจากค่าข้อความ &#34;Name|Address|PhoneNumber&#34; ที่คั่นด้วย &#34;|&#34;
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




## Category
Text.Transformations
