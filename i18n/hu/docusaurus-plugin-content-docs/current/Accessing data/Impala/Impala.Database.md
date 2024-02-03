---
title: Impala.Database
---

# Impala.Database


## Description

Adatok importálása Impala-fürtből


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Adatok importálása Impala-fürtből <code>server</code>. Ha nincs megadva a port, az alapértelmezett 21050-es port lesz használatban.


## Examples

### Example #1 
Egy Impala-fürtben lévő táblák felsorolása.
```powerquery
Impala.Database("localhost:21050")
```



