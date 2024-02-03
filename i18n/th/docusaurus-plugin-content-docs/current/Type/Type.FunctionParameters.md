---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

ส่งกลับระเบียนที่มีค่าเขตข้อมูลถูกตั้งค่าเป็นชื่อของพารามิเตอร์ของประเภทฟังก์ชัน และค่าของฟังก์ชันนั้นถูกตั้งค่าเป็นประเภทที่สอดคล้องกัน


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

ส่งกลับระเบียนที่มีค่าเขตข้อมูลถูกตั้งค่าเป็นชื่อของพารามิเตอร์ <code>type</code> และค่าของเขตข้อมูลนั้นถูกตั้งค่าเป็นประเภทที่สอดคล้องกัน


## Examples

### Example #1 
ค้นหาประเภทของพารามิเตอร์สำหรับฟังก์ชัน &lt;code&gt;(x as number, y as text)&lt;/code&gt;
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
