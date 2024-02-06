---
title: Smartsheet.Content
---

# Smartsheet.Content


Returnerer en tabel med data fra slutpunktet i et Smartsheet-indeks.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

Foretager et kald til Smartsheet 2.0 REST-API'en på det angivne slutpunkt og omdanner det returnerede dataelement til en tabel.


## Examples

### Example #1 
Udtrækker en tabel med brugeroplysninger fra Smartsheet-API&#39;en
```powerquery
Smartsheet.Content("brugere")
```

Result: 
```powerquery
En tabel med brugeroplysninger som returneret af Smartsheet-API'en
```



