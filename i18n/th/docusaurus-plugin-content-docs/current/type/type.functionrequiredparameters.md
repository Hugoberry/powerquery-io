---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


ส่งกลับจำนวนที่ระบุจำนวนขั้นต่ำของพารามิเตอร์ที่ต้องใช้เพื่อเรียกประเภทฟังก์ชันนั้น


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

ส่งกลับจำนวนที่ระบุจำนวนขั้นต่ำของพารามิเตอร์ที่ต้องใช้เพื่อเรียกอินพุต `type` ของฟังก์ชัน


## Examples

### Example #1
ค้นหาจำนวนพารามิเตอร์ที่ต้องการสำหรับฟังก์ชัน `(x as number, optional y as text)`
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
