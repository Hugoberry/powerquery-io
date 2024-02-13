---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Retourneert een tabel waarvan de laatste N rijen zijn verwijderd.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Hiermee wordt een tabel geretourneerd die niet de laatste <code>countOrCondition</code> rijen bevat van de tabel <code>table</code>. Het aantal rijen dat wordt verwijderd, is afhankelijk van de optionele parameter <code>countOrCondition</code>. <ul> <li> Als <code>countOrCondition</code> wordt weggelaten, wordt alleen de laatste rij verwijderd. </li> <li> Als <code>countOrCondition</code> een getal is, wordt dat aantal rijen (van onderaf) verwijderd. </li> <li> Als <code>countOrCondition</code> een voorwaarde is, worden de rijen die aan de voorwaarde voldoen verwijderd totdat een rij niet aan de voorwaarde voldoet.</li> </ul>


## Examples

### Example #1 
De laatste rij van de tabel verwijderen.
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
De laatste rijen waar [CustomerID] &gt; 2 van de tabel verwijderen.
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
