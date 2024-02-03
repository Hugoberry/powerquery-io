---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

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


## Details

Сохраняет исходное смещение, затем попеременно принимает и пропускает следующие строки.    <ul>       <li><code>table</code>: входная таблица.</li>       <li><code>offset</code>: число строк, которые должны быть сохранены перед началом итераций.</li>       <li><code>skip</code>: число строк, удаляемых в каждой итерации.</li>       <li><code>take</code>: число строк, сохраняемых в каждой итерации.</li>    </ul>    


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
