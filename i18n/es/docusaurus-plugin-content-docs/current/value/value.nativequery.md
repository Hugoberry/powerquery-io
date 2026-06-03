---
title: Value.NativeQuery
---

# Value.NativeQuery


Evalúa una consulta en un destino.


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

Evalúa `query`en contra `target` usar los parámetros especificados en `parameters` y las opciones especificadas en `options`.

La salida de la consulta se define mediante `target`.

`target`provecha el contexto de la operación descrita por `query`.

`query` describe la consulta que se va a ejecutar en `target`. `query`es expresado de forma específica para `target` (por ejemplo, una instrucción T-SQL).

El valor opcional `parameters` puede contener una lista o un registro según corresponda para proporcionar los valores de parámetro esperados por `query`.

El registro opcional `options` puede contener opciones que afectan al comportamiento de evaluación de `query` en contra `target`. Estas opciones son específicas de `target`.



## Category
Values
