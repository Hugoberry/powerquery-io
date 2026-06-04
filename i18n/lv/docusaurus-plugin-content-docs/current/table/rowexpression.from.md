---
title: RowExpression.From
---

# RowExpression.From


Atgriež funkcijas pamatteksta abstrakto sintakses koku (AST).


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Atgriež abstrakto sintakses koku (AST) `function`pamattekstam, kurš normalizēts *rindas izteiksmē*:

-   Šai funkcijai ir jābūt 1 argumenta lambdai.
-   Visas atsauces uz šo funkcijas parametru tiek aizstātas ar `RowExpression.Row`.
-   Visas atsauces uz kolonnám tiek aizstātas ar `RowExpression.Column(columnName)`.
-   AST tiks vienkāršots, lai ietvertu tikai šādu veidu mezglus:
    -   `Constant`
    ;-   `Invocation`
    ;-   `Unary`
    ;-   `Binary`
    ;-   `If`
    ;-   `FieldAccess`
    ;

Rodas kļūda, ja pamattekstam nevar atgriezt `function` rindas izteiksmes AST.  
  
Šī funkcija ir identiska `ItemExpression.From`.


## Examples

### Example #1
Atgriež AST funkcijas `each [CustomerID] = "ALFKI"` pamattekstam.
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
