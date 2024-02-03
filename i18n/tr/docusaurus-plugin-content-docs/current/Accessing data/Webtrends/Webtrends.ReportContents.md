---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Webtrends&#39;e ilişkin rapor içeriğinin yer aldığı bir tablo döndürür.


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

Belirlenen Webtrends raporlama uç noktasına çağrıda bulunur ve tüm verileri bir tablo olarak döndürür.


## Examples

### Example #1 
Son 30 güne ilişkin veriler için Webtrends ziyaretçi raporu uç noktasına çağrıda bulunur
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Ziyaretçi verilerinin yer aldığı bir tablo
```



