---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Restituisce una tabella con le ultime N righe rimosse.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Restituisce una tabella che non contiene le ultime `countOrCondition` righe della tabella `table`. Il numero di righe rimosse dipende dal parametro facoltativo `countOrCondition`.

-   Se `countOrCondition` viene omesso, verrà rimossa solo l'ultima riga.
-   Se `countOrCondition` è un numero, verrà rimosso lo stesso numero di righe, a partire dal basso.
-   Se `countOrCondition` è una condizione, verranno rimosse le righe che soddisfano la condizione finché non viene trovata una riga che non soddisfa la condizione.


## Examples

### Example #1
Rimuovere l'ultima riga della tabella.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Rimuovere le ultime righe in cui \[CustomerID\] > 2 della tabella.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
