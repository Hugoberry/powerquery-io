---
title: RowExpression.From
---

# RowExpression.From


## Description

Vrne abstraktno sintaksa drevo (AST) za telo funkcija.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Vrne drevo abstraktne sintakse (AST) za telo <code>function</code>, normalizirano v <i>izraz vrstice</i>:<ul>  <li>Funkcija mora biti lambda z enim argumentom.</li>  <li>Vsi sklici na parameter funkcije so zamenjani z <code>RowExpression.Row</code>.</li>  <li>Vsi sklici na stolpce so zamenjani z <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>Drevo AST bo poenostavljeno tako, da bo vsebovalo samo naslednje vrste vozlišč:    <ul>      <li><code>Konstanta</code></li>      <li><code>Priklic</code></li>      <li><code>Unarno</code></li>      <li><code>Dvojiško</code></li>      <li><code>Če</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Če izraza vrstice AST ni mogoče vrniti za telo <code>function</code>, se prikaže sporočilo o napaki.<br />


## Examples

### Example #1 
Vrne AST za telo funkcije &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
