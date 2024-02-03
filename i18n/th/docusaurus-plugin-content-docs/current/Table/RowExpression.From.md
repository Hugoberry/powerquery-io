---
title: RowExpression.From
---

# RowExpression.From


## Description

ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) สําหรับเนื้อความของฟังก์ชัน


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) สำหรับเนื้อความของ <code>function</code> ปรับให้เป็นมาตรฐานใน<i>นิพจน์แถว</i>:<ul>  <li>ฟังก์ชันต้องเป็น lambda ชนิดอาร์กิวเมนต์ 1</li>  <li>การอ้างอิงทั้งหมดไปยังพารามิเตอร์จะถูกแทนที่ด้วย <code>RowExpression.Row</code></li>  <li>การอ้างอิงทั้งหมดไปยังคอลัมน์จะถูกแทนที่ด้วย <code>RowExpression.Column(<i>columnName</i>)</code></li>  <li>AST จะง่ายขึ้นเพื่อให้มีเฉพาะโหนดชนิด:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />จะมีการแสดงข้อผิดพลาด ถ้าไม่สามารถส่งกลับนิพจน์แถว AST สำหรับเนื้อความของ <code>function</code><br />


## Examples

### Example #1 
ส่งคืน AST สำหรับเนื้อความของฟังก์ชัน &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
