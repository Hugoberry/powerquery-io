---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Розгортає стовпець записів у стовпці з кожним зі значень.


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

Маючи <code>column</code> записів у вхідному <code>table</code>, створює таблицю зі стовпцем для кожного поля у записі. Можна також вказати <code>newColumnNames</code> для забезпечення унікальних імен для стовпців у новій таблиці.    <ul>        <li><code>table</code>: Оригінальна таблиця зі стовпцем записів для розгортання. </li>        <li><code>column</code>: Стовпець для розгортання.</li>        <li><code>fieldNames</code>: Список полів для розгортання у стовпці в таблиці.</li>        <li><code>newColumnNames</code>: Список імен для нових стовпців. Нові імена стовпців не можуть дублювати стовпці в новій таблиці.</li>    </ul>


## Examples

### Example #1 
Розгорнути стовпець [a] у таблиці &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; у 3 стовпці &#34;aa&#34;, &#34;bb&#34; та &#34;cc&#34;.
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
