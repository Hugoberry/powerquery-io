---
title: Impala.Database
---

# Impala.Database


Імпорт даних із кластера Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Імпорт даних із кластера Impala `server`. Якщо не вказати порт, використовуватиметься стандартний порт 21050.


## Examples

### Example #1
Список таблиць у кластері Impala.
```powerquery
Impala.Database("localhost:21050")
```



