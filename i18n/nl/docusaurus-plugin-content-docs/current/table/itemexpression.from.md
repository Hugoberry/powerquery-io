---
title: ItemExpression.From
---

# ItemExpression.From


Retourneert de abstracte syntaxisstructuur (AST) voor de hoofdtekst van een functie.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Retourneert de abstracte syntaxisstructuur (AST) voor de hoofdtekst van `function`, genormaliseerd in een *itemexpressie*:

-   De functie moet een lambdaoperator met één argument zijn.
-   Alle verwijzingen naar de functieparameter worden vervangen door `ItemExpression.Item`.
-   De abstracte syntaxisstructuur wordt vereenvoudigd en bevat alleen de volgende soorten knooppunten:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Er treedt een fout op als een itemexpressie AST niet kan worden geretourneerd voor de hoofdtekst van `function`.  
  
Deze functie is identiek aan `RowExpression.From`.


## Examples

### Example #1
Hiermee wordt de abstracte syntaxisstructuur geretourneerd voor de hoofdtekst van de functie `each _ <> null`.
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
