---
title: Value.NativeQuery
---

# Value.NativeQuery


Avalía unha consulta nun destino.


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

Avalía `query` en `target` mediante os parámetros especificados en `parameters` e as opcións especificadas en `options`.

`target` define a saída da consulta.

`target` fornece o contexto da operación que describe `query`.

`query` describe a consulta que se vai executar en `target`. `query` exprésase dun xeito específico a `target` (p. ex., unha instrución T-SQL).

O valor `parameters` opcional pode conter unha lista ou rexistro como apropiado para fornecer os valores do parámetro que espera `query`.

O rexistro `options` opcional pode conter opcións que afecten ao comportamento da avaliación de `query` en `target`. Estas opcións son específicas de `target`.



## Category
Values
