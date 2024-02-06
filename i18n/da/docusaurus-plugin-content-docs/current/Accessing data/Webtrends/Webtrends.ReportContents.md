---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


Returnerer en tabel med rapportindhold fra Webtrends.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Foretager et kald til det angivne slutpunkt for Webtrends-rapportering og returnerer alle data som en tabel.


## Examples

### Example #1 
Foretager et kald til slutpunktet for data i Webtrends-besøgsrapporten inden for de seneste 30 dage
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
En tabel med besøgsdata
```



