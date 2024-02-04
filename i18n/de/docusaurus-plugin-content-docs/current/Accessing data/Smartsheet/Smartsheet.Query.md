---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Gibt ein JSON-Ergebnis aus der Smartsheet-API zurück.


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Ruft die Smartsheet 2.0-REST-API am angegebenen Endpunkt auf und gibt die Ergebnisse als JSON-Datensatz zurück.


## Examples

### Example #1 
Ruft unter Angabe zusätzlicher Argumente Daten vom Smartsheet-API-Endpunkt für Arbeitsblätter ab.
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Eine Tabelle mit Arbeitsblattinformationen, wie sie von der Smartsheet-API zurückgegeben werden
```



