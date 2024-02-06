---
title: Impala.Database
---

# Impala.Database


Bir Impala kümesinden verileri içeri aktarın


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Bir <code>server</code> Impala kümesinden verileri içeri aktarın. Bağlantı noktası belirtilmemişse varsayılan bağlantı noktası olarak 21050 kullanılır.


## Examples

### Example #1 
Bir Impala kümesindeki tabloları listeleyin.
```powerquery
Impala.Database("localhost:21050")
```



