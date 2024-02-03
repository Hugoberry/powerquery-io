---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Vrne abstraktno sintaksa drevo (AST) za telo funkcija.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Vrne drevo abstraktne sintakse (AST) za telo <code>function</code>, normalizirano v <i>izraz elementa</i>:<ul>  <li>Funkcija mora biti lambda z enim argumentom.</li>  <li>Vsi sklici na parameter funkcije so zamenjani z <code>ItemExpression.Item</code>.</li>  <li>Drevo AST bo poenostavljeno tako, da bo vsebovalo samo naslednje vrste vozlišč:    <ul>      <li><code>Konstanta</code></li>      <li><code>Priklic</code></li>      <li><code>Unarno</code></li>      <li><code>Dvojiško</code></li>      <li><code>Če</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Če izraza elementa AST ni mogoče vrniti za telo <code>function</code>, se prikaže sporočilo napaki.<br />


## Examples

### Example #1 
Vrne AST za telo funkcije &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
