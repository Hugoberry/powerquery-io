---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

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


## Details

Получив <code>column</code> записей на входе <code>table</code>, создать таблицу со столбцом для каждого поля в записи. Можно также задать необязательный параметр <code>newColumnNames</code>, чтобы обеспечить уникальность имен столбцов в новой таблице.    <ul>        <li><code>table</code>: исходная таблица со столбцом записи, который требуется развернуть. </li>        <li><code>column</code>: столбец, который необходимо развернуть.</li>        <li><code>fieldNames</code>: список полей, которые требуется развернуть в столбцы таблицы.</li>        <li><code>newColumnNames</code>: список имен для новых столбцов. Новые имена столбцов не могут повторять какие-либо столбцы в новой таблице.</li>    </ul>


## Examples

### Example #1 
Развернуть столбец [a] в таблице &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; в 3 столбца - &#34;aa&#34;, &#34;bb&#34; и &#34;cc&#34;.
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
