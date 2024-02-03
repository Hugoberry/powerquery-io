---
title: Table.Max
---

# Table.Max


## Description

Возвращает самую большую строку или значение по умолчанию, используя заданные критерии.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Возвращает наибольшую строку в <code>table</code>, исходя из критериев <code>comparisonCriteria</code>. Если таблица пуста, то возвращается значение необязательного параметра <code>default</code>. 


## Examples

### Example #1 
Найти строку с наибольшим значением в столбце [a] в таблице &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Найти строку с наибольшим значением в столбце [a] в таблице &lt;code&gt;(\{})&lt;/code&gt;. Получить -1, если таблица пуста.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
