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

Возвращает профиль столбцов в <code>table</code>.<br />Для каждого столбца возвращаются следующие сведения (когда это возможно):<ul>  <li>минимум</li>  <li>максимум</li>  <li>среднее</li>  <li>стандартное отклонение</li>  <li>счетчик</li>  <li>количество значений NULL</li>  <li>число различных объектов</li></ul><br />



## Category
Table.Information
