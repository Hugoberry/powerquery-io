---
title: Table.AlternateRows
---

# Table.AlternateRows


Mantiene l&#39;offset iniziale, quindi accetta e ignora alternativamente le righe seguenti.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Mantiene l'offset iniziale, quindi accetta e ignora alternativamente le righe seguenti.    <ul>       <li><code>table</code>: tabella di input.</li>       <li><code>offset</code>: numero di righe da mantenere prima di avviare le iterazioni.</li>       <li><code>skip</code>: numero di righe da rimuovere in ogni iterazione.</li>       <li><code>take</code>: numero di righe da mantenere in ogni iterazione.</li>    </ul>    


## Examples

### Example #1 
Restituire una tabella dalla tabella che, a partire dalla prima riga, ignora 1 valore e quindi mantiene 1 valore.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
