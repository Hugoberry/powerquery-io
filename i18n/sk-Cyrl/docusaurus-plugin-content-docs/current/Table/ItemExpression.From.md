---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Vráti abstraktný strom syntaxe (AST) pre telo funkcie.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Vráti abstraktný strom syntaxe (AST) tela <code>function</code> normalizovaný do výrazu <i>item</i>:<ul>  <li>Funkcia musí byť lambda s 1 argumentom.</li>  <li>Všetky odkazy na parameter funkcie sa nahradia reťazcom <code>ItemExpression.Item</code>.</li>  <li>AST bude zjednodušená tak, aby obsahovala iba uzly tohto typu:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Po výraze položky sa vyskytne chyba Hodnotu AST nemožno vrátiť pre telo súboru <code>function</code>.<br />


## Examples

### Example #1 
Vráti hodnotu AST pre telo funkcie &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
