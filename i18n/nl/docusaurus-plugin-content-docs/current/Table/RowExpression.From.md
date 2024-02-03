---
title: RowExpression.From
---

# RowExpression.From


## Description

Retourneert de abstracte syntaxisstructuur (AST) voor de hoofdtekst van een functie.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Hiermee wordt de abstracte syntaxisstructuur (AST) voor de hoofdtekst van <code>function</code> geretourneerd en genormaliseerd in een <i>rijexpressie</i>:<ul>  <li>De functie moet een lambda met 1 argument zijn.</li>  <li>Alle verwijzingen naar de functieparameter worden vervangen door <code>RowExpression.Row</code>.</li>  <li>Alle verwijzingen naar kolommen worden vervangen door <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>De abstracte syntaxisstructuur wordt vereenvoudigd en bevat alleen de volgende soorten knooppunten:    <ul>      <li><code>Constant</code></li>      <li><code>Aanroep</code></li>      <li><code>Unair</code></li>      <li><code>Binair</code></li>      <li><code>Als</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Er treedt een fout op als rijexpressie AST niet kan worden geretourneerd naar de hoofdtekst van <code>function</code>.<br />


## Examples

### Example #1 
Hiermee wordt de abstracte syntaxisstructuur geretourneerd voor de hoofdtekst van de functie &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
