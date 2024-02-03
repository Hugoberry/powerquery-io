---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Returnează un tabel cu conținutul de raport de la Webtrends.


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

Efectuează un apel la punctul final de raportare Webtrends dat și returnează toate datele ca tabel.


## Examples

### Example #1 
Efectuează un apel către punctul final de raport al vizitatorilor Webtrends pentru datele din ultimele 30 de zile
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Un tabel cu date ale vizitatorilor
```



