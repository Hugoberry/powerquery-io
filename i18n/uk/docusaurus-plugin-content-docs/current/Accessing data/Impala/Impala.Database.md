---
title: Impala.Database
---

# Impala.Database


## Description

Імпорт даних із кластера Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Імпорт даних із кластера Impala <code>server</code>. Якщо не вказати порт, використовуватиметься стандартний порт 21050.


## Examples

### Example #1 
Список таблиць у кластері Impala.
```powerquery
Impala.Database("localhost:21050")
```



