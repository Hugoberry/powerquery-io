---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

ส่งกลับจำนวนที่ระบุจำนวนขั้นต่ำของพารามิเตอร์ที่ต้องใช้เพื่อเรียกประเภทฟังก์ชันนั้น


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

ส่งกลับจำนวนที่ระบุจำนวนขั้นต่ำของพารามิเตอร์ที่ต้องใช้เพื่อเรียกอินพุต <code>type</code> ของฟังก์ชัน


## Examples

### Example #1 
ค้นหาจำนวนพารามิเตอร์ที่ต้องการสำหรับฟังก์ชัน &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
