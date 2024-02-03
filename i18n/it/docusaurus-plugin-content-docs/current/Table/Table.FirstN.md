---
title: Table.FirstN
---

# Table.FirstN


## Description

Restituisce le prime righe del conteggio specificate.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Restituisce le prime righe della tabella <code>table</code> a seconda del valore di <code>countOrCondition</code>:    <ul>    <li> Se <code>countOrCondition</code> è un numero, verrà restituito lo stesso numero di righe, a partire dall'alto. </li>    <li> Se <code>countOrCondition</code> è una condizione, verranno restituite le righe che soddisfano la condizione finché non viene trovata una riga che non soddisfa la condizione.</li></ul>


## Examples

### Example #1 
Trovare le prime due righe della tabella.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Trovare le prime righe in cui [a] &gt; 0 nella tabella.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
