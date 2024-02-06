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

Возвращает структурное представление базы данных Access, <code>database</code>. Можно указать необязательный параметр записи <code>options</code> для управления следующими параметрами:    <ul><li><code>CreateNavigationProperties</code> : Логическое значение (true или false), которое указывает, следует ли создавать свойства навигации в возвращаемых значениях. Значение по умолчанию&#160;— false.</li><li><code>NavigationPropertyNameGenerator</code> : Функция, которая используется для создания имен свойств навигации.</li></ul>    Пример указания параметра записи: [параметр1 = значение1, параметр2 = значение2...].



## Category
Accessing data
