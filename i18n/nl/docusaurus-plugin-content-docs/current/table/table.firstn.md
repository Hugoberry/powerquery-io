---
title: Table.FirstN
---

# Table.FirstN


Retourneert het eerste aantal opgegeven rijen.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Retourneert de eerste rij(en) van de tabel <code>table</code>, afhankelijk van de waarde van <code>countOrCondition</code>:    <ul>    <li> Als <code>countOrCondition</code> een getal is, wordt dat aantal rijen (vanaf het begin) geretourneerd. </li>    <li> Als <code>countOrCondition</code> een voorwaarde is, worden de rijen geretourneerd die voldoen aan de voorwaarde, en stopt het retourneren bij een rij die niet aan de voorwaarde voldoet.</li></ul>


## Examples

### Example #1 
De eerste twee rijen van de tabel zoeken.
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
In de tabel de eerste rijen zoeken waarin [a] &gt; 0.
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
