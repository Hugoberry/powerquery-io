---
title: RowExpression.From
---

# RowExpression.From


## Description

Vraća apstraktno stablo sintakse (AST) za telo funkcije.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Vraća apstraktno stablo sintakse (AST) za telo za <code>function</code>, normalizovano u <i>izraz reda</i>:<ul>  <li>Funkcija mora biti lambda od 1 argumenta.</li>  <li>Sve reference za parametar funkcije zamenjuju se sa <code>RowExpression.Row</code>.</li>  <li>Sve reference za kolone zamenjuju se sa <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>AST će biti pojednostavljen tako da sadrži samo sledeće vrste čvorova:    <ul>      <li><code>Konstanta</code></li>      <li><code>Pozivanje</code></li>      <li><code>Unarni</code></li>      <li><code>Binarni</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Dolazi do greške ako AST izraza reda ne može da se vrati za telo za <code>function</code>.<br />


## Examples

### Example #1 
Vraća AST za telo funkcije &lt;code&gt;za svaki [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
