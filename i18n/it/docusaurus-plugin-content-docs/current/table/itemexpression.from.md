---
title: ItemExpression.From
---

# ItemExpression.From


Restituisce l'albero della sintassi astratta (AST) per il corpo di una funzione.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Restituisce l'albero sintattico astratto per il corpo di `function`, normalizzato in un *espressione di elemento*:

-   La funzione deve essere una funzione lambda con 1 argomento.
-   Tutti i riferimenti al parametro di funzione sono sostituiti con `ItemExpression.Item`.
-   L'albero sintattico astratto verrà semplificato per contenere solo i nodi delle tipologie seguenti:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Viene generato un errore se non viene restituito un albero sintattico astratto dell'espressione di riga per il corpo di `function`.  
  
Questa funzione è identica a `RowExpression.From`.


## Examples

### Example #1
Restituisce l'AST per il corpo della funzione `each _ <> null`.
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
