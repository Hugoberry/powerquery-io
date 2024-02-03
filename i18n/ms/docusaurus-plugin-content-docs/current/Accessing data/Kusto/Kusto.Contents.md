---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Mengimport data daripada Azure Data Explorer   (Kusto)


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Mengimport data daripada tika Azure Data Explorer (Kusto) anda


## Examples

### Example #1 
Mengembalikan jadual maklumat Peristiwa Ribut
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Jadual dengan Peristiwa Ribut daripada pangkalan data "Sampel" dalam gugusan "bantuan"
```



