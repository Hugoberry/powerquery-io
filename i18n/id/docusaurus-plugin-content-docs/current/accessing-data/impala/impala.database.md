---
title: Impala.Database
---

# Impala.Database


Impor data dari kluster impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Impor data dari kluster impala `server`. Jika port tidak ditetapkan, maka port default 21050 akan digunakan.


## Examples

### Example #1
Buat daftar tabel dalam kluster impala.
```powerquery
Impala.Database("localhost:21050")
```



