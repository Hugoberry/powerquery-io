---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Restituisce una tabella con le prime righe del conteggio ignorate.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Restituisce una tabella non contiene il primo numero specificato di righe <code>countOrCondition</code> della tabella <code>table</code>.    Il numero di righe rimosse dipende dal parametro facoltativo <code>countOrCondition</code>.    <ul>    <li> Se <code>countOrCondition</code> viene omesso, verrà rimossa solo la prima riga. </li>    <li> Se <code>countOrCondition</code> è un numero, verrà rimosso lo stesso numero di righe, a partire dall'alto. </li>    <li> Se <code>countOrCondition</code> è una condizione, verranno rimosse le righe che soddisfano la condizione finché non viene trovata una riga che non soddisfa la condizione.</li>    </ul>


## Examples

### Example #1 
Rimuovere la prima riga della tabella.
```powerquery
Table.RemoveFirstN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Rimuovere le prime due righe della tabella.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
Rimuovere le prime righe in cui [CustomerID] &lt;=2 della tabella.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
