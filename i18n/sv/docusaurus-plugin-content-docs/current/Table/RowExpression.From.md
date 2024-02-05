---
title: RowExpression.From
---

# RowExpression.From


## Description

Returnerar det abstrakta syntaxträdet (AST) för en funktions brödtext.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Returnerar abstrakt syntaxträd (AST) för brödtexten för <code>function</code>, normaliserad till ett <i>raduttryck</i>:<ul>  <li>Funktionen måste vara ett 1-argumentslambda.</li>  <li>Alla referenser till funktionsparametrarna ersätts med <code>RowExpression.Row</code>.</li>  <li>Alla referenser till kolumner ersätts med <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>AST förenklas till att innehålla enbart noder av typerna:   <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Ett fel utlöses om ett raduttrycks-AST inte kan returneras för brödtexten för <code>function</code>.<br />


## Examples

### Example #1 
Returnerar AST för brödtexten till funktionen &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
