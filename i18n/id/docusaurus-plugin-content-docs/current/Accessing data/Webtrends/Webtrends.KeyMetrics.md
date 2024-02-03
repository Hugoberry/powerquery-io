---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Menghasilkan tabel dengan metrik Webtrends kunci.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Melakukan panggilan ke endpoint Webtrends KeyMetrics dan menghasilkan semua data sebagai tabel.


## Examples

### Example #1 
Menarik tabel metrik kunci untuk penyewa 98765 dalam 30 terakhir
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Tabel metrik kunci
```



