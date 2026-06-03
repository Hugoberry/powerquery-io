---
title: Table.LastN
---

# Table.LastN


Restituisce l'ultimo numero di righe specificato.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Restituisce le ultime righe della tabella `table`, a seconda del valore di `countOrCondition`:

-   Se `countOrCondition` è un numero, verrà restituito lo stesso numero di righe, a partire dalla posizione (fine - `countOrCondition`).
-   Se `countOrCondition` è una condizione, verranno restituite le righe che soddisfano la condizione in posizione crescente finché non viene trovata una riga che non soddisfa la condizione.


## Examples

### Example #1
Trovare le ultime due righe della tabella.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Trovare le ultime righe in cui \[a\] > 0 nella tabella.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
