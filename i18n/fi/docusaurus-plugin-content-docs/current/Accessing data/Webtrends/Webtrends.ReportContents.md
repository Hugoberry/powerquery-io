---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Palauttaa taulukon, jossa on raporttisisältöä Webtrendsistä.


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

Tekee kutsun annetulle Webtrends-raportoinnin päätepisteelle ja palauttaa kaikki tiedot taulukkona.


## Examples

### Example #1 
Tekee kutsun Webtrends-vierailijaraportin päätepisteelle viimeisimpien 30 päivän tiedoista
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Vierailijatietojen taulukko
```



