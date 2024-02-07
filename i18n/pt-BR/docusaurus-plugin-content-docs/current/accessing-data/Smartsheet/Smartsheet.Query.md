---
title: Smartsheet.Query
---

# Smartsheet.Query


Retorna um resultado JSON da API do Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

Efetua uma chamada à API REST do Smartsheet 2.0 no ponto de extremidade especificado e retorna resultados como um registro JSON.


## Examples

### Example #1 
Efetua pull de dados do ponto de extremidade de API do Smartsheet das planilhas com argumentos adicionais especificados
```powerquery
Smartsheet.Content("planilhas", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Uma tabela com informações de planilhas conforme retornadas pela API do Smartsheet
```



