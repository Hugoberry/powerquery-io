---
title: Table.Range
---

# Table.Range


## Description

Vraća redove počev od navedenog pomaka.


## Syntax

```powerquery
Table.Range(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Details

Vraća redove iz <code>table</code> počev od navedenog <code>offset</code>. Opcionalni parametar, <code>count</code>, navodi koliko redova treba vratiti. Podrazumevano se vraćaju svi redovi koji se nalaze posle pomaka.


## Examples

### Example #1 
Vraćanje svih redova počev od pomaka 1 u tabeli.
```powerquery
Table.Range(
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
Vraćanje jednog reda počev od pomaka 1 u tabeli.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]})
```




## Category
Table.Row operations
