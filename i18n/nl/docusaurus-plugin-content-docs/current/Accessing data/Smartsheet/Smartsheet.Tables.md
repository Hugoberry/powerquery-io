---
title: Smartsheet.Tables
---

# Smartsheet.Tables


Hiermee wordt een tabel met bladen, rapporten, mappen en werkruimten geretourneerd via de Smartsheet-API


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Remarks

Hiermee wordt een geneste tabel met beschikbare bladen, rapporten, mappen en werkruimten geretourneerd via de Smartsheet-API.


## Examples

### Example #1 
Hiermee worden bladen, mappen, rapporten en werkruimten geretourneerd die beschikbaar zijn op het hoogste niveau van de Smartsheet-hiërarchie
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
Een tabel met mappen, rapporten en werkruimten op het hoogste niveau van de Smartsheet-hiërarchie
```



