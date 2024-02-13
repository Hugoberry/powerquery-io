---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Zwraca tabelę, z której usunięto N ostatnich wierszy.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Zwraca tabelę, która nie zawiera <code>countOrCondition</code> ostatnich wierszy z tabeli <code>table</code>.        Liczba usuniętych wierszy jest zależna od opcjonalnego parametru <code>countOrCondition</code>.    <ul>    <li> Pominięcie parametru <code>countOrCondition</code> spowoduje usunięcie tylko ostatniego wiersza. </li>    <li> Jeśli parametr <code>countOrCondition</code> jest liczbą, określa liczbę wierszy (licząc od dołu), które zostaną usunięte. </li>    <li>Jeśli parametr <code>countOrCondition</code> jest warunkiem, będą usuwane wiersze spełniające ten warunek, aż do wiersza, który go nie spełnia.</li>    </ul>


## Examples

### Example #1 
Usuń ostatni wiersz z tabeli.
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
Usuń z tabeli ostatnie wiersze, w których jest spełniony warunek [CustomerID] &gt; 2.
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
