---
title: RowExpression.From
---

# RowExpression.From


## Description

Atgriež funkcijas pamatteksta abstrakto sintakses koku (AST).


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Atgriež abstrakto sintakses koku (AST) <code>function</code> pamattekstam, kas ir normalizēts <i>rindas izteiksmē</i>:<ul>  <li>Šai funkcijai ir jābūt 1 argumenta lambdai.</li>  <li>Visas atsauces uz šo funkcijas parametru tiek aizstātas ar <code>RowExpression.Row</code>.</li>  <li>Visas atsauces uz kolonnām tiek aizstātas ar <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>AST tiks vienkāršots, lai ietvertu tikai šādu veidu mezglus:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Ja <code>function</code> pamattekstam nevar atgriezt kādu rindas izteiksmes AST, rodas kļūda.<br />


## Examples

### Example #1 
Atgriež AST funkcijas &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; pamattekstam
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
