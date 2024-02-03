---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

 Evalúa <code>query</code>en contra <code>target</code> usar los parámetros especificados en <code>parameters</code> y las opciones especificadas en <code>options</code>.<br />La salida de la consulta se define mediante <code>target</code>.<br /><code>target</code>provecha el contexto de la operación descrita por <code>query</code>.<br /><code>query</code> describe la consulta que se va a ejecutar en <code>target</code>. <code>query</code>es expresado de forma específica para <code>target</code> (por ejemplo, una instrucción T-SQL).<br /> El valor opcional <code>parameters</code> puede contener una lista o un registro según corresponda para proporcionar los valores de parámetro esperados por <code>query</code>.<br />El registro opcional <code>options</code> puede contener opciones que afectan al comportamiento de evaluación de <code>query</code> en contra <code>target</code>. Estas opciones son específicas de <code>target</code>.<br />



## Category
Values
