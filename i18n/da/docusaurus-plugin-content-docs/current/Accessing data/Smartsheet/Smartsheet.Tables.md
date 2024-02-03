---
title: Smartsheet.Tables
---

# Smartsheet.Tables


## Description

Returnerer en tabel med ark, rapporter, mapper og arbejdsområder fra Smartsheet-API&#39;en


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Details

Returnerer en indlejret tabel med tilgængelige ark, rapporter, mapper og arbejdsområder fra Smartsheet-API'en.


## Examples

### Example #1 
Returnerer ark, mapper, rapporter og arbejdsområder, der er tilgængelige på øverste niveau i Smartsheet-hierarkiet
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
En tabel med mapper, rapporter og arbejdsområder fra det øverste niveau i Smartsheet-hierarkiet
```



