---
title: ItemExpression.From
---

# ItemExpression.From


## Description

ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) สําหรับเนื้อความของฟังก์ชัน


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) สำหรับเนื้อความของ <code>function</code> ปรับให้เป็นมาตรฐานใน<i>นิพจน์รายการ</i>:<ul>  <li>ฟังก์ชันต้องเป็น lambda ชนิดอาร์กิวเมนต์ 1</li>  <li>การอ้างอิงทั้งหมดไปยังพารามิเตอร์ฟังก์ชันจะถูกแทนที่ด้วย <code>ItemExpression.Item</code></li>  <li>AST จะง่ายขึ้นเพื่อให้มีเฉพาะโหนดชนิด:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />จะมีการแสดงข้อผิดพลาด ถ้าไม่สามารถส่งกลับนิพจน์รายการ AST สำหรับเนื้อความของ <code>function</code><br />


## Examples

### Example #1 
ส่งคืน AST สำหรับเนื้อความของฟังก์ชัน &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
