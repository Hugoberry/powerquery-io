---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Возвращает кубы в экземпляре Essbase, сгруппированные сервером Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Возвращает таблицу кубов, сгруппированных сервером Essbase, из экземпляра Essbase на сервере APS <code>url</code>. Вы можете указать необязательный параметр записи <code>options</code> для управления следующими функциями:    <ul><li><code>CommandTimeout</code> : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию&#160;— 10&#160;минут.</li></ul>



## Category
Accessing data
