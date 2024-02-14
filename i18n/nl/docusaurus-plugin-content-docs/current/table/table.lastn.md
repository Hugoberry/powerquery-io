---
title: Table.LastN
---

# Table.LastN


Retourneert het laatste opgegeven aantal rijen.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Retourneert de laatste rij(en) van de tabel <code>table</code>, afhankelijk van de waarde van <code>countOrCondition</code>:    <ul>    <li> Als <code>countOrCondition</code> een getal is, wordt dat aantal rijen geretourneerd, te beginnen bij positie (einde - <code>countOrCondition</code>). </li>    <li> Als <code>countOrCondition</code> een voorwaarde is, worden de rijen die voldoen aan de voorwaarde, oplopend geretourneerd en stopt het retourneren bij een rij die niet aan de voorwaarde voldoet.</li></ul>


## Examples

### Example #1 
De laatste twee rijen van de tabel zoeken.
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
De laatste rijen in de tabel zoeken waarin [a] &gt; 0.
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
