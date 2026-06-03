---
title: Table.Max
---

# Table.Max


Возвращает самую большую строку или значение по умолчанию, используя заданные критерии.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Возвращает наибольшую строку в `table`, исходя из критериев `comparisonCriteria`. Если таблица пуста, то возвращается значение необязательного параметра `default`.


## Examples

### Example #1
Найти строку с наибольшим значением в столбце \[a\] в таблице `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Найти строку с наибольшим значением в столбце \[a\] в таблице `({})`. Получить -1, если таблица пуста.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
