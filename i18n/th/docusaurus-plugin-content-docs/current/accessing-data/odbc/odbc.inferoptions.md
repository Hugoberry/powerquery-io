---
title: Odbc.InferOptions
---

# Odbc.InferOptions


ส่งกลับผลลัพธ์ของการพยายามอ้างถึงความสามารถ SQL สำหรับโปรแกรมควบคุม ODBC


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

ส่งกลับผลลัพธ์ของการพยายามอ้างถึงความสามารถ SQL กับสตริงการเชื่อมต่อ <code>connectionString</code> โดยใช้ ODBC <code>connectionString</code> สามารถเป็นข้อความหรือระเบียนของคู่ค่าคุณสมบัติ ค่าคุณสมบัติสามารถเป็นข้อความหรือตัวเลข


## Examples

### Example #1 
ส่งกลับความสามารถ SQL ที่อ้างถึงสําหรับสตริงการเชื่อมต่อ
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
