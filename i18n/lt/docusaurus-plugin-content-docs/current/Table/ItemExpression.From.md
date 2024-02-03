---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Pateikia funkcijos turinio abstrakčiosios sintaksės medį (AST).


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Pateikia <code>function</code> turinio, normalizuoto į <i>elemento reiškinį</i>, abstrakčiosios sintaksės medį (AST):<ul>  <li>Funkcija turi būti 1 argumento lambda.</li>  <li>Visos funkcijos parametro nuorodos pakeičiamos naudojant <code>ItemExpression.Item</code>.</li>  <li>AST bus supaprastintas, kad jame būtų tik rūšių mazgai:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Pateikiama klaida, jei nepavyksta pateikti elemento reiškinio AST, skirto <code>function</code> turiniui.<br />


## Examples

### Example #1 
Pateikiamas funkcijos &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt; turinio AST
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
