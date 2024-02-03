---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Hiermee wordt een tabel met gegevens van een Smartsheet-indexeindpunt geretourneerd.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Hiermee wordt een aanroep verzonden naar de Smartsheet 2.0 REST API op het opgegeven eindpunt en wordt het geretourneerde gegevenselement omgezet in een tabel.


## Examples

### Example #1 
Hiermee wordt een tabel met gebruikersgegevens opgehaald via de Smartsheet-API
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Een tabel met gebruikersgegevens die zijn geretourneerd door de Smartsheet-API
```



