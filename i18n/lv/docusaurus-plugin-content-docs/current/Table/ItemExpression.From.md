---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Atgriež funkcijas pamatteksta abstrakto sintakses koku (AST).


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Atgriež abstrakto sintakses koku (AST) <code>function</code> pamattekstam, kas ir normalizēts <i>vienuma izteiksmē</i>:<ul>  <li>Šai funkcijai ir jābūt 1 argumenta lambdai.</li>  <li>Visas atsauces uz šo funkcijas parametru tiek aizstātas ar <code>ItemExpression.Item</code>.</li>  <li>AST tiks vienkāršots, lai ietvertu tikai šādu veidu mezglus:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Ja <code>function</code> pamattekstam nevar atgriezt kādu vienuma izteiksmes AST, rodas kļūda.<br />


## Examples

### Example #1 
Atgriež funkcijas &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt; pamatteksta AST
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
