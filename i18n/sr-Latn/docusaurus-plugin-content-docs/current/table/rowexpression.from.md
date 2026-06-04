---
title: RowExpression.From
---

# RowExpression.From


Vraća apstraktno stablo sintakse (AST) za telo funkcije.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Vraća AST za telo za `function`, normalizovano u *izraz reda*:

-   Funkcija mora da bude lambda od 1 argumenta.
-   Sve reference za parametar funkcije zamenjuju se sa `RowExpression.Row`.
-   Sve reference za kolone zamenjuju se sa `RowExpression.Column(columnName)`.
-   AST će biti pojednostavljen tako da sadrži samo sledeće čvorove:
    -   `Konstanta`
    -   `Pozivanje`
    -   `Unarni`
    -   `Binarni`
    -   `If`
    -   `FieldAccess`

Dolazi do greške ako AST izraza reda ne može da bude vraćen za telo za `function`.  
  
Ova funkcija je identična sa `ItemExpression.From`.


## Examples

### Example #1
Vraća AST za telo funkcije `za svaki [CustomerID] = "ALFKI"`.
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
