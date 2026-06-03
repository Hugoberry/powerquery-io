---
title: RowExpression.From
---

# RowExpression.From


Retourneert de abstracte syntaxisstructuur (AST) voor de hoofdtekst van een functie.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Retourneert de abstracte syntaxisstructuur (AST) voor de hoofdtekst van `function`, genormaliseerd in een *rijexpressie*:

-   De functie moet een lambdaoperator met één argument zijn.
-   Alle verwijzingen naar de functieparameter worden vervangen door `RowExpression.Row`.
-   Alle verwijzingen naar kolommen worden vervangen door `RowExpression.Column(columnName)`.
-   De AST wordt vereenvoudigd en bevat alleen de volgende soorten knooppunten:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binair`
    -   `If`
    -   `FieldAccess`

Er treedt een fout op als een rijexpressie AST niet kan worden geretourneerd voor de hoofdtekst van `function`.  
  
Deze functie is identiek aan `ItemExpression.From`.


## Examples

### Example #1
Hiermee wordt de AST (abstracte syntaxisstructuur) geretourneerd voor de hoofdtekst van de functie `each [CustomerID] = "ALFKI"`.
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
