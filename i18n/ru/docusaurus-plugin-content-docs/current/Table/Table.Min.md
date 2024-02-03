---
title: Table.Min
---

# Table.Min


## Description

Возвращает наименьшую строку или значение по умолчанию, исходя из заданных критериев.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Возвращает наименьшую строку в <code>table</code>, исходя из критериев <code>comparisonCriteria</code>. Если таблица пуста, то возвращается значение необязательного параметра <code>default</code>.


## Examples

### Example #1 
Нахождение строки с наименьшим значением в столбце [a] в таблице.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Нахождение строки с наименьшим значением в столбце [a] в таблице. Возврат -1, если таблица пуста.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
