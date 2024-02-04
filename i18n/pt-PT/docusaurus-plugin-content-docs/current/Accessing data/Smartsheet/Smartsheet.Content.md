---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Devolve uma tabela de dados de um ponto final do índice do Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Efetua uma chamada à API REST do Smartsheet 2.0 no ponto final especificado e transforma o elemento de dados devolvido à tabela.


## Examples

### Example #1 
Solicita uma tabela de informações de utilizadores da API do Smartsheet
```powerquery
Smartsheet.Content("utilizadores")
```

Result: 
```powerquery
Uma tabela com informações de utilizadores conforme devolvido pela API do Smartsheet
```



