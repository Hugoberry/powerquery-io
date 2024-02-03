---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Retourneert een tabel met het eerste aantal overgeslagen rijen.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Hiermee wordt een tabel geretourneerd die niet het eerste opgegeven aantal rijen bevat, <code>countOrCondition</code>, van de tabel <code>table</code>. Het aantal rijen dat wordt verwijderd, is afhankelijk van de optionele parameter <code>countOrCondition</code>. <ul> <li> Als <code>countOrCondition</code> wordt weggelaten, wordt alleen de eerste rij verwijderd. </li> <li> Als <code>countOrCondition</code> een getal is, wordt dat aantal rijen (van bovenaf) verwijderd. </li> <li> Als <code>countOrCondition</code> een voorwaarde is, worden de rijen die aan de voorwaarde voldoen verwijderd totdat een rij niet aan de voorwaarde voldoet.</li> </ul>


## Examples

### Example #1 
De eerste rij van de tabel verwijderen.
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
De eerste twee rijen van de tabel verwijderen.
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
De eerste twee rijen waar [CustomerID] &lt;=2 0 van de tabel verwijderen.
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
