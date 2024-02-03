---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Returnerer det abstrakte syntakstræ (AST) for en funktions brødtekst.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Returnerer det abstrakte syntakstræ (AST) for brødteksten i <code>function</code>, normaliseret til et <i>elementudtryk</i>:<ul>  <li>Funktionen skal være et 1-argument lambda.</li>  <li>Alle referencer til funktionsparameteren erstattes med <code>ItemExpression.Item</code>.</li>  <li>AST forenkles, så den kun indeholder noder af følgende typer::    <ul>      <li><code>Konstant</code></li>      <li><code>Aktivering</code></li>      <li><code>Monadisk</code></li>      <li><code>Binær</code></li>      <li><code>Hvis</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Der udløses en fejl, hvis et elementudtryk AST ikke kan returneres for brødteksten <code>function</code>.<br />


## Examples

### Example #1 
Returnerer AST for selve funktionen &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
