---
title: Logical.FromText
---

# Logical.FromText


สร้างค่าตรรกะจากค่าข้อความ &#34;true&#34; และ &#34;false&#34;


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

สร้างค่าตรรกะจากค่าข้อความ <code>text</code> ซึ่งเป็น "true" หรือ "false" ถ้า <code>text</code> ประกอบด้วยสตริงอื่น ระบบจะแสดงข้อยกเว้น ค่าข้อความ <code>text</code> ไม่ตรงตามตัวพิมพ์ใหญ่เล็ก


## Examples

### Example #1 
สร้างค่าตรรกะจากสตริงข้อความ &#34;true&#34;
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
สร้างค่าตรรกะจากสตริงข้อความ &#34;a&#34;
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
