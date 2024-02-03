---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Devolve unha táboa con contido de informes de Webtrends.


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

Realiza unha chamada ao extremo de informes de Webtrends atribuído e devolve todos os datos como unha táboa.


## Examples

### Example #1 
Realiza unha chamada ao extremo do informe de visitantes de Webtrends para obter datos dos últimos 30 días
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Unha táboa de datos dos visitantes
```



