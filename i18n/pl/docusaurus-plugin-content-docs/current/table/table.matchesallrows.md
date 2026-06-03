---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Wskazuje, czy wszystkie wiersze tabeli spełniają dany warunek.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Wskazuje, czy wszystkie wiersze tabeli `table` spełniają dany warunek `condition`. Zwraca wartość `true`, jeśli wszystkie wiersze spełniają warunek; w przeciwnym razie zwraca wartość `false`.


## Examples

### Example #1
Ustal, czy wszystkie wartości wierszy w kolumnie \[a\] tabeli są parzyste.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
Ustal, czy wszystkie wartości wierszy w tabeli `({[a = 1, b = 2], [a = 3, b = 4]})` są równe \[a = 1, b = 2\].
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
