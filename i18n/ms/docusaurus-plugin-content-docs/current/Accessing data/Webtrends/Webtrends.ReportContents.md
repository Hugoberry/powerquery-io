---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Mengembalikan jadual dengan kandungan laporan daripada Webtrends.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Membuat panggilan ke titik tamat pelaporan Webtrends yang ditetapkan dan mengembalikan semua data sebagai jadual.


## Examples

### Example #1 
Membuat panggilan ke titik tamat laporan pelawat Webtrends untuk data dalam 30 hari yang lalu
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Jadual data pelawat
```



