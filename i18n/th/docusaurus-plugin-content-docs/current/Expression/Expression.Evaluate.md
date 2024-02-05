---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

ส่งกลับผลลัพธ์ของการประเมินนิพจน์ M


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

ส่งกลับผลลัพธ์ของการประเมินนิพจน์ M <code>document</code> ด้วยตัวระบุที่พร้อมใช้งานซึ่งสามารถอ้างอิงและกำหนดได้โดย <code>environment</code>


## Examples

### Example #1 
ประเมินผลรวมแบบง่าย
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
ประเมินผลรวมที่ซับซ้อนยิ่งขึ้น
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
ประเมินการเรียงต่อกันของค่าข้อความด้วยตัวระบุ
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
