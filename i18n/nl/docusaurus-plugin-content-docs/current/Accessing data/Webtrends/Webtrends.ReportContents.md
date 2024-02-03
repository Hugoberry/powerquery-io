---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Hiermee wordt een tabel met rapportinhoud uit Webtrends geretourneerd.


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

Hiermee wordt een aanroep verzonden naar het opgegeven Webtrends-rapporteindpunt en worden alle gegevens geretourneerd als een tabel.


## Examples

### Example #1 
Hiermee wordt een aanroep voor gegevens van de afgelopen 30 dagen verzonden naar het rapporteindpunt voor Webtrends-bezoekers
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Een tabel met bezoekersgegevens
```



