---
title: RowExpression.From
---

# RowExpression.From


Returnerer det abstrakte syntakstræ (AST) for en funktions brødtekst.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Returnerer det abstrakte syntakstræ (AST) for brødteksten i <code>function</code>, normaliseret til et <i>rækkeudtryk</i>:<ul>  <li>Funktionen skal være et 1-argument lambda.</li>  <li>Alle referencer til funktionsparameteren erstattes med <code>RowExpression.Row</code>.</li>  <li>Alle referencer til kolonner erstattes med <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>AST forenkles, så den kun indeholder noder af følgende typer    <ul>      <li><code>Konstant</code></li>      <li><code>Aktivering</code></li>      <li><code>Monadisk</code></li>      <li><code>Binær</code></li>      <li><code>hvis</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Der udløses en fejl, hvis et rækkeudtryk AST ikke kan returneres for brødteksten i <code>function</code>.<br />


## Examples

### Example #1 
Returnerer AST for selve funktionen &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
