---
title: Table.Profile
---

# Table.Profile


Возвращает профиль столбцов таблицы.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Возвращает профиль столбцов в `table`.

Для каждого столбца возвращаются следующие сведения (когда это возможно):

-   минимум
-   максимум
-   среднее
-   стандартное отклонение
-   счетчик
-   количество значений NULL
-   число различных объектов



## Category
Table.Information
