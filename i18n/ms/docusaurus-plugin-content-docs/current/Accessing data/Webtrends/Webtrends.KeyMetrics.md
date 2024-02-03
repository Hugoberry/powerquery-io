---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Mengembalikan jadual dengan metrik kunci Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Membuat panggilan ke titik tamat KeyMetrics Webtrends dan mengembalikan semua data sebagai jadual.


## Examples

### Example #1 
Menarik jadual metrik kunci bagi penyewa 98765 dalam 30 hari lalu
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Jadual metrik kunci
```



