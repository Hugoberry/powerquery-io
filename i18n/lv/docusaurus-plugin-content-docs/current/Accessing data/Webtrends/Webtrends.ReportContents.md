---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Atgriež tabulu ar atskaišu saturu no risinājuma Webtrends.


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

Izsauc norādīto Webtrends atskaišu galapunktu un atgriež visus datus tabulas formā.


## Examples

### Example #1 
Izsauc Webtrends apmeklētāju atskaišu galapunktu, pieprasot datus par pēdējām 30 dienām
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Apmeklētāju datu tabula
```



