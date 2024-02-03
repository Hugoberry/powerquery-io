---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Zwraca tabelę powstałą w wyniku pominięcia określonej liczby pierwszych wierszy z innej tabeli.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Zwraca tabelę, która nie zawiera określonej liczby pierwszych wierszy (<code>countOrCondition</code>) z tabeli <code>table</code>.    Liczba usuniętych wierszy jest zależna od opcjonalnego parametru <code>countOrCondition</code>.     <ul>    <li> Pominięcie parametru <code>countOrCondition</code> spowoduje usunięcie tylko pierwszego wiersza. </li>    <li> Jeśli parametr <code>countOrCondition</code> jest liczbą, określa liczbę wierszy (licząc od góry), które zostaną usunięte. </li>    <li>Jeśli parametr <code>countOrCondition</code> jest warunkiem, będą usuwane wiersze spełniające ten warunek, aż do wiersza, który go nie spełnia.</li>    </ul>


## Examples

### Example #1 
Usuń pierwszy wiersz z tabeli.
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
Usuń pierwsze dwa wiersze z tabeli.
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
Usuń z tabeli pierwsze wiersze, w których jest spełniony warunek [CustomerID] &lt;=2.
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
