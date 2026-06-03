---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Развертывает столбец записей в столбцы с каждым из значений.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Получив `column` записей на входе `table`, создать таблицу со столбцом для каждого поля в записи. Можно также задать необязательный параметр `newColumnNames`, чтобы обеспечить уникальность имен столбцов в новой таблице.

-   `table`: исходная таблица со столбцом записи, который требуется развернуть.
-   `column`: столбец, который необходимо развернуть.
-   `fieldNames`: список полей, которые требуется развернуть в столбцы таблицы.
-   `newColumnNames`: список имен для новых столбцов. Новые имена столбцов не могут повторять какие-либо столбцы в новой таблице.


## Examples

### Example #1
Развернуть столбец \[a\] в таблице `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` в 3 столбца - "aa", "bb" и "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
