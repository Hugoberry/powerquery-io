---
title: Smartsheet.Query
---

# Smartsheet.Query


Devolve um resultado JSON da API do Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

Efetua uma chamada para a API REST do Smartsheet 2.0 no ponto final especificado e devolve resultados como um registo JSON.


## Examples

### Example #1 
Solicita dados do ponto final da API do Smartsheet das folhas com argumentos adicionais especificados
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Uma tabela com informações das folhas conforme devolvidas pela API do Smartsheet
```



