---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Returnerar det abstrakta syntaxträdet (AST) för en funktions brödtext.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Returnerar abstrakt syntaxträd (AST) för brödtexten för <code>function</code>, normaliserad till ett <i>objektuttryck</i>:<ul>  <li>Funktionen måste vara ett 1-argumentslambda.</li>  <li>Alla referenser till funktionsparametrarna ersätts med <code>ItemExpression.Item</code>.</li>  <li>AST förenklas till att innehålla enbart noder av typerna:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Ett fel utlöses om ett raduttrycks-AST inte kan returneras för brödtexten för <code>function</code>.<br />


## Examples

### Example #1 
Returnerar AST för brödtexten till funktionen &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
