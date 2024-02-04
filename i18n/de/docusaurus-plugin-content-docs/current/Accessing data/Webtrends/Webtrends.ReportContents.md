---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Gibt eine Tabelle mit Berichtsinhalten aus Webtrends zurück.


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

Ruft den angegebenen Endpunkt für die Webtrends-Berichterstellung auf, und gibt alle Daten als Tabelle zurück.


## Examples

### Example #1 
Ruft die Daten der letzten 30 Tage vom Endpunkt für Webtrends-Besucherberichte ab.
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Eine Tabelle mit Besucherdaten
```



