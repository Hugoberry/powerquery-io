---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Palauttaa funktion rungolle abstraktin syntaksipuun (AST).


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

 Palauttaa kohteen <code>function</code> rungolle abstraktin syntaksipuun (AST) normalisoituna <i>kohdelausekkeeksi</i>:<ul> <li>Funktion on oltava yksiargumenttinen lambda.</li> <li>Kaikki viittaukset funktiob parametriin korvataan kohteella <code>ItemExpression.Item</code>.</li> 
<li>AST yksinkertaistetaan niin, että se sisältää vain seuraavia solmutyyppejä: <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code>.</li> </ul> </li></ul><br /><br />Tuloksena on virhe, jos kohdelausekkeen AST-kohdetta ei voi palauttaa kohteelle <code>function</code>.<br />


## Examples

### Example #1 
Palauttaa AST:n funktion rungolle &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
