---
title: Character.FromNumber
---

# Character.FromNumber


แปลงตัวเลขเป็นอักขระข้อความ


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

ส่งกลับอักขระที่เทียบเท่าตัวเลข<br />    <br />    <code>number</code> ที่ระบุควรเป็นรหัสอักขระ Unicode 21 บิต


## Examples

### Example #1 
แปลงตัวเลขเป็นค่าอักขระที่เทียบเท่ากัน
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
แปลงอักขระเป็นตัวเลข แล้วแปลงกลับอีกครั้ง
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
แปลงรหัสอักขระฐานสิบหกสำหรับอีโมติคอน “หน้ายิ้มกริ่ม” เป็นคู่ตัวแทน UTF-16 ที่เทียบเท่ากัน
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
