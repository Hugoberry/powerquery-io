---
title: Smartsheet.Content
---

# Smartsheet.Content


Retorna uma tabela de dados de um ponto de extremidade de índice do Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

Efetua uma chamada à API REST do Smartsheet 2.0 no ponto de extremidade especificado e transforma o elemento de dados retornado em uma tabela.


## Examples

### Example #1 
Efetua pull de uma tabela de informações de usuários da API do Smartsheet
```powerquery
Smartsheet.Content("usuários")
```

Result: 
```powerquery
Uma tabela com informações de usuários conforme retornadas pela API do Smartsheet
```



