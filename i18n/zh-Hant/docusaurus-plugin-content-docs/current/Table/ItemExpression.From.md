---
title: ItemExpression.From
---

# ItemExpression.From


## Description

傳回函數主體的抽象語法樹狀結構 (AST)。


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

傳回已標準化為<i>項目運算式</i>之 <code>function</code> 主體的抽象語法樹狀結構 (AST):<ul>  <li>此函式必須是只有 1 個引數的 Lambda。</li>  <li>所有對該函式參數的參考皆由 <code>ItemExpression.Item</code> 取代。</li>  <li>AST 會簡化為只包含下列種類的節點:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />當無法為 <code>function</code> 主體傳回項目運算式的 AST 時，即會引發錯誤。<br />


## Examples

### Example #1 
傳回函數 &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt; 主體的 AST
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
