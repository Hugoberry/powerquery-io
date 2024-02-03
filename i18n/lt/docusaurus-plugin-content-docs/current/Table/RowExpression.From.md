---
title: RowExpression.From
---

# RowExpression.From


## Description

Pateikia funkcijos turinio abstrakčiosios sintaksės medį (AST).


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Pateikia <code>function</code> turinio, normalizuoto į <i>eilutės reiškinį</i>, abstrakčiosios sintaksės medį (AST):<ul>  <li>Funkcija turi būti 1 argumento lambda.</li>  <li>Visos funkcijos parametro nuorodos pakeičiamos naudojant <code>RowExpression.Row</code>.</li>  <li>Visos stulpelių nuorodos pakeičiamos naudojant <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>AST bus supaprastintas, kad jame būtų tik rūšių mazgai:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Pateikiama klaida, jei nepavyksta pateikti eilutės reiškinio AST, skirto <code>function</code> turiniui.<br />


## Examples

### Example #1 
Pateikiamas funkcijos &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; turinio AST
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
