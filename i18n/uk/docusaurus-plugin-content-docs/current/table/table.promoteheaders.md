---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Підвищує перший рядок значень до рівня нових заголовків стовпців (тобто імен стовпців).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Підвищує перший рядок значень до рівня нових заголовків стовпців (тобто імен стовпців). За замовчуванням до рівня заголовків можна підвищити лише текстові або числові значення. Нижче наведено припустимі параметри.

-   `PromoteAllScalars`: коли встановлено значення `true`, усі скалярні значення першого рядка підвищуються до рівня заголовків із використанням параметра `Culture` (якщо його вказано) або локалізації поточного документа. Якщо певні значення не можна перетворити на текст, використовується стандартне ім’я стовпця.
-   `Culture`: ім’я культури, що визначає культуру для даних.


## Examples

### Example #1
Підвищити рівень першого рядка значень у таблиці.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2
Підвищення всіх скалярних значень першого рядка таблиці до рівня заголовків.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
