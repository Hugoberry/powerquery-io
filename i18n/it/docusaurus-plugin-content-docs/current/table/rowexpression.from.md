---
title: RowExpression.From
---

# RowExpression.From


Restituisce l'albero della sintassi astratta (AST) per il corpo di una funzione.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Restituisce l'albero sintattico astratto per il corpo di `function`, normalizzato in un *espressione di riga*:

-   La funzione deve essere una funzione lambda con 1 argomento.
-   Tutti i riferimenti al parametro di funzione sono sostituiti con `RowExpression.Row`.
-   Tutti i riferimenti alle colonne sono sostituiti con `RowExpression.Column(columnName)`.
-   L'albero sintattico astratto verrà semplificato per contenere solo i nodi delle tipologie seguenti:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Viene generato un errore se non viene restituito un albero sintattico astratto dell'espressione di riga per il corpo di `function`.  
  
Questa funzione è identica a `ItemExpression.From`.


## Examples

### Example #1
Restituisce l'albero sintattico astratto per il corpo della funzione `each [CustomerID] = "ALFKI"`.
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
