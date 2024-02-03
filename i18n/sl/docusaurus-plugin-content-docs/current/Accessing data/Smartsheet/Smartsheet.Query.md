---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Vrne rezultat JSON iz vmesnika API storitve Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Pokliče vmesnik REST API storitve Smartsheet 2.0 na navedeni končni točki in vrne rezultate v obliki zapisa JSON.


## Examples

### Example #1 
Pridobi podatke z lista na končni točki vmesnika API storitve Smartsheet z dodatnimi navedenimi argumenti
```powerquery
Smartsheet.Content("listi", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Tabela s podatki o listih, ki jo vrne vmesnik API storitve Smartsheet
```



