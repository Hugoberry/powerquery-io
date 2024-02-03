---
title: RowExpression.From
---

# RowExpression.From


## Description

Palauttaa funktion rungolle abstraktin syntaksipuun (AST).


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

 Palauttaa kohteen <code>function</code>rungolle abstraktin syntaksipuun (AST) normalisoituna <i>rivilausekkeeksi</i>:<ul> <li>Funktion on oltava yksiargumenttinen lambda.</li> <li>Kaikki viittaukset funktion parametriin korvataan kohteella <code>RowExpression.Row</code>.</li> 
<li>Kaikki viittaukset sarakkeisiin korvataan kohteella <code>RowExpression.Column(<i>columnName</i>)</code>.</li> <li>AST yksinkertaistetaan niin, että se sisältää vain seuraavia solmutyyppejä: <ul> <li><code>Constant</code></li> <li><code>Invocation</code></li> <li><code>Unary</code></li> <li><code>Binary</code></li> <li><code>Jos</code></li> <li><code>FieldAccess</code>.</li> 
</ul> </li></ul><br /><br />Tuloksena on virhe, jos rivilausekkeen AST-kohdetta ei voi palauttaa kohteelle <code>function</code>.<br />


## Examples

### Example #1 
Palauttaa AST-kohteen funktion &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; rungolle
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
