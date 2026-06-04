---
title: Impala.Database
---

# Impala.Database


Import data daripada kelompok Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Import data daripada kelompok Impala `server`. Jika port tidak ditentukan, port lalai 21050 akan digunakan.


## Examples

### Example #1
Senaraikan jadual dalam kelompok Impala.
```powerquery
Impala.Database("localhost:21050")
```



