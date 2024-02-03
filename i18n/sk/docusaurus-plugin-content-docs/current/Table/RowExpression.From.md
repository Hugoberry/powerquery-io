---
title: RowExpression.From
---

# RowExpression.From


## Description

Vráti abstraktný strom syntaxe (AST) pre telo funkcie.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Vráti abstraktný strom syntaxe (AST) pre hlavnú časť funkcie <code>function</code> normalizovanú do <i>výrazu riadka</i>:<ul>  <li>Funkcia musí byť lambda s 1 argumentom.</li>  <li>Všetky odkazy na parameter funkcie sa nahradia reťazcom <code>RowExpression.Row</code>.</li>  <li>Všetky odkazy na stĺpce sa nahradia reťazcom <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>Hodnota AST bude zjednodušená tak, aby obsahovala iba uzly typov:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Ak nie je možné pre hlavnú časť funkcie <code>function</code> vrátiť hodnotu AST výrazu riadka, zobrazí sa chyba.<br />


## Examples

### Example #1 
Vráti hodnotu AST pre hlavnú časť funkcie &lt;code&gt;each [CustomerID] = „ALFKI“&lt;/code&gt;
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
