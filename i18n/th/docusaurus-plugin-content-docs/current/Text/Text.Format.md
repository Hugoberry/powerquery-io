---
title: Text.Format
---

# Text.Format


## Description

ส่งคืนข้อความที่มีรูปแบบจากสตริงรูปแบบและอาร์กิวเมนต์


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

ส่งคืนข้อความที่จัดรูปแบบซึ่งสร้างโดยการนำ <code>arguments</code> ไปใช้จากรายการหรือระเบียนไปยังสตริงรูปแบบ <code>formatString</code> อาจมีการระบุ <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1 
จัดรูปแบบรายการตัวเลข
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
จัดรูปแบบประเภทข้อมูลอื่นๆ จากบันทึกตามวัฒนธรรมภาษาอังกฤษแบบอเมริกา
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
