---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Menghasilkan tabel dengan konten laporan dari Webtrends.


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

Melakukan panggilan ke endpoint pelaporan Webtrends tertentu dan menghasilkan semua data sebagai tabel.


## Examples

### Example #1 
Melakukan panggilan ke endpoint laporan pengunjung Webtrends untuk data dalam 30 hari terakhir
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Tabel data pengunjung
```



