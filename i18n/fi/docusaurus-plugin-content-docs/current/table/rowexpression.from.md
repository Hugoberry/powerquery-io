---
title: RowExpression.From
---

# RowExpression.From


Palauttaa funktion rungolle abstraktin syntaksipuun (AST).


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Palauttaa kohteen `function` rungolle abstraktin syntaksipuun (AST), normalisoituna *rivilausekkeeksi*:

-   Funktion on oltava yksiargumenttinen lambda.
-   Kaikki viittaukset funktion parametriin korvataan kohteella `RowExpression.Row`.
-   Kaikki viittaukset sarakkeisiin korvataan kohteella `RowExpression.Column(columnName)`.
-   AST yksinkertaistetaan sisältämää vain seuraavia lajeja olevat solmut:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Tuloksena on virhe, jos rivilausekkeen AST-kohdetta ei voi palauttaa kohteen `function` rungolle.  
  
Tämä funktio on identtinen funktiolle `ItemExpression.From`.


## Examples

### Example #1
Palauttaa AST-kohteen funktion `each [CustomerID] = "ALFKI"` rungolle.
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
