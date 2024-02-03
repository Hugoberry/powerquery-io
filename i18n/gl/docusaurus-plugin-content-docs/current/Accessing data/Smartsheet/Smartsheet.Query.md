---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Devolve un resultado JSON da API de Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Realiza unha chamada á API de REST de Smartsheet 2.0 no extremo especificado e devolve resultados como un rexistro JSON.


## Examples

### Example #1 
Extrae datos das follas do extremo da API de Smartsheet con argumentos adicionais especificados
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Unha táboa coa información das follas como a devolveu a API de Smartsheet
```



