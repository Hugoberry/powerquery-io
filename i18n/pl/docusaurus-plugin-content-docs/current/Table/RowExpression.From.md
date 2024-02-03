---
title: RowExpression.From
---

# RowExpression.From


## Description

Zwraca abstrakcyjne drzewo składni (AST) dla treści funkcji.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Zwraca drzewo składni abstrakcyjnej (AST) dla treści <code>function</code>, znormalizowane do wyrażenia <i>row expression</i>:<ul> <li>Funkcja musi być funkcją lambda z 1 argumentem.</li>  <li>Wszystkie odwołania do parametru funkcji są zamieniane na  <code>RowExpression.Row</code>.</li>  <li>Wszystkie odwołania do kolumn są zastępowane <code>RowExpression.Column(<i>columnName</i>)</code>.</li> <li>Drzewo AST zostanie uproszczone tak, aby zawierało tylko węzły tego rodzaju:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Jeśli nie można zwrócić drzewa składni  abstrakcyjnej (AST) wyrażenia wiersza dla treści funkcji <code>function</code>, jest zgłaszany błąd.<br />


## Examples

### Example #1 
Zwraca wyrażenie AST dotyczące treści funkcji &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
