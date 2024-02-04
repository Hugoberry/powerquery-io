---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Gibt eine Tabelle mit Daten von einem Smartsheet-Indexendpunkt zurück.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Ruft die Smartsheet 2.0-REST-API am angegebenen Endpunkt auf und transformiert das zurückgegebene Datenelement in eine Tabelle.


## Examples

### Example #1 
Ruft eine Tabelle mit Benutzerinformationen aus der Smartsheet-API ab.
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Eine Tabelle mit Benutzerinformationen, wie sie von der Smartsheet-API zurückgegeben werden
```



