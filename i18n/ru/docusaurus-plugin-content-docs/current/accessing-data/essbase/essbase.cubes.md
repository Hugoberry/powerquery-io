---
title: Essbase.Cubes
---

# Essbase.Cubes


Возвращает кубы в экземпляре Essbase, сгруппированные сервером Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу кубов, сгруппированных сервером Essbase, из экземпляра Essbase на сервере APS `url`. Вы можете указать необязательный параметр записи `options` для управления следующими функциями:

-   `CommandTimeout` : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию — 10 минут.



## Category
Accessing data
