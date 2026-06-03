---
title: Access.Database
---

# Access.Database


Возвращает структурное представление базы данных Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Возвращает структурное представление базы данных Access, `database`. Можно указать необязательный параметр записи, `options`, для управления следующими вариантами:

-   `CreateNavigationProperties` : Логическое значение (true или false), которое указывает, следует ли создавать свойства навигации в возвращаемых значениях. Значение по умолчанию — false.
-   `NavigationPropertyNameGenerator` : Функция, которая используется для создания имен свойств навигации.

Параметр записи указывается, например, в виде \[option1 = value1, option2 = value2...\].



## Category
Accessing data
