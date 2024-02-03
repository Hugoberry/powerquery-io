---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Возвращает список, содержащий указанное количество первых строк и оставшиеся строки.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Возвращает список, содержащий две таблицы: таблицу с первыми N строками <code>table</code> (в соответствии с <code>count</code>) и таблицу с оставшимися строками <code>table</code>.Если таблицы получившегося списка пронумерованы только один раз и по порядку, то функция пронумерует <code>table</code> только один раз.


## Examples

### Example #1 
Возвращает две первые строки таблицы и остальные строки таблицы.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
