---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


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


## Remarks

Маючи `column` записів у вхідному `table`, створює таблицю зі стовпцем для кожного поля у записі. Можна також вказати `newColumnNames` для забезпечення унікальних імен для стовпців у новій таблиці.

-   `table`: Оригінальна таблиця зі стовпцем записів для розгортання.
-   `column`: Стовпець для розгортання.
-   `fieldNames`: Список полів для розгортання у стовпці в таблиці.
-   `newColumnNames`: Список імен для нових стовпців. Нові імена стовпців не можуть дублювати стовпці в новій таблиці.


## Examples

### Example #1
Розгорнути стовпець \[a\] у таблиці `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` у 3 стовпці "aa", "bb" та "cc".
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
