---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Restituisce una tabella con il contenuto dei report da Webtrends.


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

Effettua una chiamata all'endpoint dei report Webtrends e restituisce tutti i dati come una tabella.


## Examples

### Example #1 
Effettua una chiamata all&#39;endpoint del report dei visitatori Webtrends per ottenere i dati degli ultimi 30 giorni
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Tabella con i dati dei visitatori
```



