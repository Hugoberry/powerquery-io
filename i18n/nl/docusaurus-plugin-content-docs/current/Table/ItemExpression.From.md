---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Retourneert de abstracte syntaxisstructuur (AST) voor de hoofdtekst van een functie.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Hiermee wordt de abstracte syntaxisstructuur (AST) voor de hoofdtekst van <code>function</code> geretourneerd en genormaliseerd in een <i>itemexpressie</i>:<ul>  <li>De functie moet een lambda met 1 argument zijn.</li>  <li>Alle verwijzingen naar de functieparameter worden vervangen door <code>ItemExpression.Item</code>.</li>  <li>De abstracte syntaxisstructuur wordt vereenvoudigd en bevat alleen de volgende soorten knooppunten:    <ul>      <li><code>Constant</code></li>      <li><code>Aanroep</code></li>      <li><code>Unair</code></li>      <li><code>Binair</code></li>      <li><code>Als</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Er treedt een fout op als rijexpressie AST niet kan worden geretourneerd naar de hoofdtekst van <code>function</code>.<br />


## Examples

### Example #1 
Hiermee wordt de abstracte syntaxisstructuur geretourneerd voor de hoofdtekst van de functie &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
