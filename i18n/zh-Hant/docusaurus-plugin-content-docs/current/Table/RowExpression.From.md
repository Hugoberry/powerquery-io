---
title: RowExpression.From
---

# RowExpression.From


傳回函數主體的抽象語法樹狀結構 (AST)。


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

傳回已標準化為<i>資料列運算式</i>之 <code>function</code> 主體的抽象語法樹狀結構 (AST):<ul>  <li>此函式必須是 1 個引數的 Lambda。</li>  <li>所有對該函式參數的參考皆由 <code>RowExpression.Row</code> 取代。</li>  <li>所有對資料行的參考都會以 <code>RowExpression.Column(<i>columnName</i>)</code> 取代。</li>  <li>AST 會簡化為只包含下列種類的節點:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />當無法為 <code>function</code> 主體傳回資料列運算式的 AST 時，即會引發錯誤。<br />


## Examples

### Example #1 
傳回函數 &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; 主體的 AST
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
