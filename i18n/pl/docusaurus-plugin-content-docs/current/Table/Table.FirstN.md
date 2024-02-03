---
title: Table.FirstN
---

# Table.FirstN


## Description

Zwraca określoną liczbę pierwszych wierszy tabeli.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Zwraca pierwsze wiersze z tabeli <code>table</code>, w zależności od wartości parametru <code>countOrCondition</code>:    <ul>    <li> Jeśli parametr <code>countOrCondition</code> jest liczbą, określa liczbę wierszy (licząc od góry), które zostaną zwrócone. </li>    <li>Jeśli parametr <code>countOrCondition</code> jest warunkiem, będą zwracane wiersze spełniające ten warunek, aż do wiersza, który go nie spełnia.</li></ul>


## Examples

### Example #1 
Znajdź pierwsze dwa wiersze w tabeli.
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
Znajdź w tabeli pierwszy wiersz, w którym wartość kolumny [a] jest większa od 0.
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
