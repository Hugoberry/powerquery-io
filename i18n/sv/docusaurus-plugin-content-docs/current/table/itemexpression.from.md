---
title: ItemExpression.From
---

# ItemExpression.From


Returnerar det abstrakta syntaxträdet (AST) för en funktions brödtext.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Returnerar det abstrakta syntaxträdet (AST) för brödtexten för `function`, normaliserat till ett *item-uttryck*:

-   Funktionen måste vara ett 1-argumentslambda.
-   Alla referenser till funktionsparametern ersätts med `ItemExpression.Item`.
-   AST förenklas till att innehålla enbart noder av typerna:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Ett fel utlöses om ett objektuttrycks-AST inte kan returneras för brödtexten i `function`.  
  
Den här funktionen är identisk med `RowExpression.From`.


## Examples

### Example #1
Returnerar AST för brödtexten till funktionen `each _ <> null`.
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
