---
title: Impala.Database
---

# Impala.Database


## Description

Impor data dari kluster impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Impor data dari kluster impala <code>server</code>. Jika port tidak ditetapkan, maka port default 21050 akan digunakan.


## Examples

### Example #1 
Buat daftar tabel dalam kluster impala.
```powerquery
Impala.Database("localhost:21050")
```



