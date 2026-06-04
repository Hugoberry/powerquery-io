---
title: ItemExpression.From
---

# ItemExpression.From


Vraća apstraktno stablo sintakse (AST) za telo funkcije.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Vraća apstraktno sintaksno stablo (AST) za telo `function`, normalizovano u *izraz stavke*:

-   Funkcija mora da bude lambda od 1 argumenta.
-   Sve reference za parametar funkcije zamenjuju se sa `ItemExpression.Item`.
-   AST će biti pojednostavljen tako da sadrži samo sledeće čvorove:
    -   `Konstanta`
    -   `Pozivanje`
    -   `Unarni`
    -   `Binarni`
    -   `If`
    -   `FieldAccess`

Dolazi do greške ako izraza stavke AST ne može da se vrati za telo za `function`.  
  
Ova funkcija je identična sa `RowExpression.From`.


## Examples

### Example #1
Vraća AST za telo funkcije `each _ <> null`.
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
