---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Vraća apstraktno stablo sintakse (AST) za telo funkcije.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Vraća apstraktno stablo sintakse (AST) za telo za <code>function</code>, normalizovano u <i>izraz stavke</i>:<ul>  <li>Funkcija mora biti lambda od 1 argumenta.</li>  <li>Sve reference za parametar funkcije zamenjuju se sa <code>ItemExpression.Item</code>.</li>  <li>AST će biti pojednostavljen tako da sadrži samo sledeće vrste čvorova:    <ul>      <li><code>Konstanta</code></li>      <li><code>Pozivanje</code></li>      <li><code>Unarni</code></li>      <li><code>Binarni</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Dolazi do greške ako AST izraza stavke ne može da se vrati za telo za <code>function</code>.<br />


## Examples

### Example #1 
Vraća AST za telo funkcije &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
