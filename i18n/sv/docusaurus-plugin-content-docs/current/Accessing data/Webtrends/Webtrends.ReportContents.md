---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Returnerar en tabell med rapportinnehåll från Webtrends.


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

Anropar den givna Webtrends-rapportslutpunkten och returnerar alla data som en tabell.


## Examples

### Example #1 
Anropar Webtrends-besökarnas rapportslutpunkt för data under de senaste 30 dagarna
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
En besöksdatatabell
```



