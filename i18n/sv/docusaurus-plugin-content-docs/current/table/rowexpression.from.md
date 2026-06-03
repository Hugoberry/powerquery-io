---
title: RowExpression.From
---

# RowExpression.From


Returnerar det abstrakta syntaxträdet (AST) för en funktions brödtext.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Returnerar det abstrakta syntaxträdet (AST) för brödtexten för `function`, normaliserat till ett *raduttryck*:

-   Funktionen måste vara ett 1-argumentslambda.
-   Alla referenser till funktionsparametrarna ersätts med `RowExpression.Row`.
-   Alla referenser till kolumner ersätts med `RowExpression.Column(columnName)`.
-   AST förenklas till att innehålla enbart noder av typerna:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Ett fel utlöses om ett raduttrycks-AST inte kan returneras för brödtexten för `function`.  
  
Den här funktionen är identisk med `ItemExpression.From`.


## Examples

### Example #1
Returnerar AST för brödtexten till funktionen `each [CustomerID] = "ALFKI"`.
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
