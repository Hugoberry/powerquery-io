---
title: Table.LastN
---

# Table.LastN


## Description

Zwraca określoną liczbę ostatnich wierszy.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Zwraca ostatnie wiersze z tabeli <code>table</code>, w zależności od wartości parametru <code>countOrCondition</code>:    <ul>    <li> Jeśli parametr <code>countOrCondition</code> jest liczbą, określa liczbę wierszy, które zostaną zwrócone, licząc od określonej pozycji (koniec — <code>countOrCondition</code>). </li>    <li>Jeśli parametr <code>countOrCondition</code> jest warunkiem, będą zwracane wiersze na kolejnych pozycjach rosnących spełniające ten warunek, aż do wiersza, który go nie spełnia.</li></ul>


## Examples

### Example #1 
Znajdź ostatnie dwa wiersze tabeli.
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
Znajdź ostatni wiersz, w którym wartość kolumny [a] jest większa od 0.
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
