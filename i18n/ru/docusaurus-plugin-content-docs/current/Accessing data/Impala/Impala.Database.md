---
title: Impala.Database
---

# Impala.Database


## Description

Импорт данных из кластера Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Импорт данных из кластера Impala <code>№ \{0}</code>. Если порт не указан, используется стандартный порт, 21050.


## Examples

### Example #1 
Перечисление таблиц в кластере Impala.
```powerquery
Impala.Database("localhost:21050")
```



