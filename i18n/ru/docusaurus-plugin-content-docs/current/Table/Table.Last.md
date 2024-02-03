---
title: Table.Last
---

# Table.Last


## Description

Возвращает последнюю строку или указанное значение по умолчанию.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Возвращает последнюю строку из <code>table</code> или необязательное значение по умолчанию <code>default</code>, если таблица пуста.


## Examples

### Example #1 
Нахождение последней строки таблицы.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
Найти последнюю строку таблицы &lt;code&gt;(\{})&lt;/code&gt; или возвратить [a = 0, b = 0], если она пуста.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
