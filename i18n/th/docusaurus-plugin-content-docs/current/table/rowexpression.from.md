---
title: RowExpression.From
---

# RowExpression.From


ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) สําหรับเนื้อความของฟังก์ชัน


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) สำหรับเนื้อความของ `function` ปรับให้เป็นมาตรฐานใน *นิพจน์แถว*:

-   ฟังก์ชันต้องเป็น lambda ชนิดอาร์กิวเมนต์ 1
-   การอ้างอิงทั้งหมดไปยังพารามิเตอร์จะถูกแทนที่ด้วย `RowExpression.Row`.
-   การอ้างอิงทั้งหมดไปยังคอลัมน์จะถูกแทนที่ด้วย `RowExpression.Column(columnName)`
-   AST จะง่ายขึ้นเพื่อให้มีเฉพาะโหนดชนิด:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

จะมีการแสดงข้อผิดพลาด ถ้าไม่สามารถส่งกลับนิพจน์แถว AST สำหรับเนื้อความของ `function`  
  
ฟังก์ชันนี้เหมือนกับ `ItemExpression.From`ทุกประการ


## Examples

### Example #1
ส่งคืน AST สำหรับเนื้อความของฟังก์ชัน `each [CustomerID] = "ALFKI"`
```powerquery
RowExpression.From(each [CustomerName] = "ALFKI")
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "Equals",
    Left = RowExpression.Column("CustomerName"),
    Right =
    [
        Kind = "Constant",
        Value = "ALFKI"
    ]
]
```




## Category
Table.Table construction
