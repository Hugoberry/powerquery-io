---
title: Table.AlternateRows
---

# Table.AlternateRows


Сохраняет исходное смещение, затем попеременно принимает и пропускает следующие строки.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Сохраняет исходное смещение, затем попеременно принимает и пропускает следующие строки.

-   `table`: входная таблица.
-   `offset`: число строк, которые должны быть сохранены перед началом итераций.
-   `skip`: число строк, удаляемых в каждой итерации.
-   `take`: число строк, сохраняемых в каждой итерации.


## Examples

### Example #1
Получение таблицы из таблицы, в которой, начиная с первой строки, пропускается одно значение, а затем сохраняется одно значение.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
