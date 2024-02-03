---
title: RowExpression.From
---

# RowExpression.From


## Description

Vrátí strom abstraktní syntaxe (AST) pro tělo funkce.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Vrátí strom abstraktní syntaxe (AST) pro tělo funkce <code>function</code> normalizované do <i>výrazu řádku</i>:<ul>  <li>Funkce musí být lambda s jedním argumentem.</li>  <li>Všechny reference na parametr funkce se nahradí za <code>RowExpression.Row</code>.</li>  <li>Všechny reference na sloupce se nahradí za <code>RowExpression.Column(<i>názevSloupce</i>)</code>.</li>  <li>AST bude zjednodušený a bude obsahovat jenom uzly těchto druhů:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Pokud pro tělo <code>function</code> nejde vrátit strom abstraktní syntaxe výrazu řádku, vyvolá se chyba.<br />


## Examples

### Example #1 
Vrátí AST pro tělo funkce &lt;code&gt;each [IDzákazníka] = &#34;ALFKI&#34;&lt;/code&gt;.
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
