---
title: Table.Distinct
---

# Table.Distinct


Удаляет повторяющиеся строки из таблицы.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Удаляет повторяющиеся строки из таблицы.    Необязательный параметр <code>equationCriteria</code> указывает, какие столбцы таблицы тестируются на дублирование. Если <code>equationCriteria</code> не указан, тестируются все столбцы.<br />    <br />    Так как Power Query иногда выгружает некоторые операции в серверные источники данных (другое название — "свертывание"), а также иногда оптимизирует запросы путем     пропуска операций, которые не являются строго необходимыми, в общем случае не гарантируется, какой именно дубликат будет сохранен.    Например, нельзя предполагать, что первая строка с уникальным набором значений столбцов останется, а последующие строки в таблице будут удалены.    Чтобы обеспечить предсказуемое поведение удаления повторяющихся результатов, сначала буферизуйте таблицу с помощью команды <code>Table.Buffer</code>.


## Examples

### Example #1 
Удаление повторяющихся строк из таблицы.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
Удалить повторяющиеся строки из столбца [b] в таблице &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
