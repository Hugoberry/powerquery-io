---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

Avalía <code>query</code> en <code>target</code> mediante os parámetros especificados en <code>parameters</code> e as opcións especificadas en <code>options</code>.<br /><code>target</code> define a saída da consulta.<br /><code>target</code> fornece o contexto da operación que describe <code>query</code>.<br /><code>query</code> describe a consulta que se vai executar en <code>target</code>. <code>query</code> exprésase dun xeito específico a <code>target</code> (p. ex., unha instrución T-SQL).<br />O valor <code>parameters</code> opcional pode conter unha lista ou rexistro como apropiado para fornecer os valores do parámetro que espera <code>query</code>.<br />O rexistro <code>options</code> opcional pode conter opcións que afecten ao comportamento da avaliación de <code>query</code> en <code>target</code>. Estas opcións son específicas de <code>target</code>.<br />



## Category
Values
