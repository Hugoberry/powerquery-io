---
title: Table.Profile
---

# Table.Profile


Повертає конфігурацію стовпців таблиці.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Повертає конфігурацію стовпців у таблиці "`table`".

Про кожен стовпець надаються такі відомості (за наявності):

-   мінімальне значення
;-   максимальне значення
;-   середнє значення
;-   стандартне відхилення
;-   кількість значень
;-   кількість Null-значень
;-   кількість унікальних значень
.



## Category
Table.Information
