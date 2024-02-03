---
title: Logical.ToText
---

# Logical.ToText


## Description

ส่งกลับ &#34;true&#34; หรือ &#34;false&#34; ที่มีการกำหนดค่าตรรกะ


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

สร้างค่าข้อความจากค่าตรรกะ <code>logicalValue</code> ซึ่งเป็น <code>true</code> หรือ <code>false</code> ถ้า <code>logicalValue</code> ไม่ใช่ค่าตรรกะ ระบบจะแสดงข้อยกเว้น


## Examples

### Example #1 
สร้างค่าข้อความจากตรรกะ &lt;code&gt;true&lt;/code&gt;
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
