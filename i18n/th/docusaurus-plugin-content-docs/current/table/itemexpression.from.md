---
title: ItemExpression.From
---

# ItemExpression.From


ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) สําหรับเนื้อความของฟังก์ชัน


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) สำหรับเนื้อความของ `function` ปรับให้เป็นมาตรฐานใน *นิพจน์รายการ*:

-   ฟังก์ชันต้องเป็น lambda ชนิดอาร์กิวเมนต์ 1
-   การอ้างอิงทั้งหมดถึงพารามิเตอร์ของฟังก์ชันจะถูกแทนที่ด้วย `ItemExpression.Item`
-   โครงสร้าง AST จะถูกทำให้เรียบง่ายขึ้น โดยจะมีเฉพาะโหนดประเภทต่อไปนี้:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

จะเกิดข้อผิดพลาดหากไม่สามารถส่งคืน AST ของนิพจน์รายการสำหรับเนื้อหาของ `function` ได้  
  
ฟังก์ชันนี้เหมือนกับ `RowExpression.From` ทุกประการ


## Examples

### Example #1
ส่งคืน AST สำหรับเนื้อความของฟังก์ชัน `each _ <> null`
```powerquery
ItemExpression.From(each _ <> null)
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "NotEquals",
    Left = ItemExpression.Item,
    Right =
    [
        Kind = "Constant",
        Value = null
    ]
]
```




## Category
Table.Table construction
