---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Vrátí strom abstraktní syntaxe (AST) pro tělo funkce.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Vrátí strom abstraktní syntaxe (AST) pro tělo funkce <code>function</code> normalizované do <i>výrazu položky</i>:<ul>  <li>Funkce musí být lambda s jedním argumentem.</li>:  <li>Všechny reference na parametr funkce se nahradí za <code>ItemExpression.Item</code>.</li>:  <li>AST bude zjednodušený a bude obsahovat jenom uzly těchto druhů:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Pokud pro tělo <code>function</code> nejde vrátit strom abstraktní syntaxe výrazu položky, vyvolá se chyba.<br />


## Examples

### Example #1 
Vrátí AST pro tělo funkce &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;.
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
