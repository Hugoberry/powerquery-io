---
title: Value.NativeQuery
---

# Value.NativeQuery


Avalia uma consulta em relação a um destino.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Avalia `query` em relação a `target` usando os parâmetros especificados em `parameters` e as opções especificadas em `options`.

A saída da consulta é definida por `target`.

`target` fornece o contexto para a operação descrita por `query`.

`query` descreve a consulta a ser executada em relação a `target`. `query` é expressa de uma maneira específica para `target` (por exemplo, uma instrução T-SQL).

O valor opcional `parameters` pode conter uma lista ou registro conforme apropriado para fornecer os valores de parâmetro esperados por `query`.

O registro opcional `options` pode conter opções que afetam o comportamento de avaliação de `query` em relação a `target`. Essas opções são específicas para `target`.



## Category
Values
