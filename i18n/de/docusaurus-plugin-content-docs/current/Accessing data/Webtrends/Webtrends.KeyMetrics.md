---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Gibt eine Tabelle mit Webtrends-Schlüsselmetriken zurück.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Ruft den Webtrends KeyMetrics-Endpunkt auf und gibt alle Daten als Tabelle zurück.


## Examples

### Example #1 
Ruft eine Tabelle der Schlüsselmetriken für Mandant 98765 für die letzten 30 Tage ab.
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Eine Tabelle mit Schlüsselmetriken
```



