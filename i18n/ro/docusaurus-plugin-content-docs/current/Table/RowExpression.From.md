---
title: RowExpression.From
---

# RowExpression.From


## Description

Returnează arborele sintactic abstract (AST) pentru corpul unei funcții.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Returnează arborele de sintaxă abstract (AST) pentru corpul <code>function</code>, normalizat într-o <i>expresie de linie</i>:<ul>  <li>Funcția trebuie să fie un argument 1 lambda.</li>  <li>Toate referințele la parametrul funcției sunt înlocuite cu <code>RowExpression.Row</code>.</li>  <li>Toate referințele la coloane sunt înlocuite cu <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>AST va fi simplificat pentru a conține numai noduri de tipul:    <ul>      <li><code>Constantă</code></li>      <li><code>Invocare</code></li>      <li><code>Unar</code></li>      <li><code>Binar</code></li>      <li><code>Dacă</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />O eroare apare dacă nu se poate returna o expresie de rând AST pentru corpul <code>function</code>.<br />


## Examples

### Example #1 
Returnează expresia AST pentru corpul funcției &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
