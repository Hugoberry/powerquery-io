---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Returnează arborele sintactic abstract (AST) pentru corpul unei funcții.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Returnează arborele de sintaxă abstract (AST) pentru corpul <code>function</code>, normalizat într-o <i>expresie de linie</i>:<ul>  <li>Funcția trebuie să fie un argument 1 lambda.</li>  <li>Toate referințele la parametrul funcției sunt înlocuite cu <code>ItemExpression.Item</code>.</li>  <li>AST va fi simplificată pentru a conține numai noduri de tipul:    <ul>      <li><code>Constantă</code></li>      <li><code>Invocare</code></li>      <li><code>Unar</code></li>      <li><code>Binar</code></li>      <li><code>Dacă</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Eroare în cazul în care nu se poate returna o expresie AST de element pentru corpul <code>function</code>.<br />


## Examples

### Example #1 
Returnează AST pentru corpul funcției &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
