---
title: Value.NativeQuery
---

# Value.NativeQuery


Avalia uma consulta num destino.


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

Avalia `query` em `target` com os parâmetros especificados em `parameters` e as opções especificadas em `options`.

O resultado da consulta é definido por `target`.

`target` fornece o contexto para a operação descrita por `query`.

`query` descreve a consulta a executar em `target`. `query` é expresso de uma forma que remete especificamente para `target` (por exemplo, uma instrução T-SQL).

O valor `parameters` opcional pode conter uma lista ou um registo, conforme apropriado, para fornecer os valores de parâmetro esperados por `query`.

O registo `options` opcional pode conter opções que afetam o comportamento da avaliação de `query` em `target`. Estas opções são específicas de `target`.



## Category
Values
