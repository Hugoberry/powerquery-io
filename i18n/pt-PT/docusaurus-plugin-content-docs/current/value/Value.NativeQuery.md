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

Avalia <code>query</code> em <code>target</code> com os parâmetros especificados em <code>parameters</code> e as opções especificadas em <code>options</code>.<br />O resultado da consulta é definido por <code>target</code>.<br /><code>target</code> fornece o contexto para a operação descrita por <code>query</code>.<br /><code>query</code> descreve a consulta a executar em <code>target</code>. <code>query</code> é expresso de uma forma que remete especificamente para <code>target</code> (por exemplo, uma instrução T-SQL).<br />O valor <code>parameters</code> opcional pode conter uma lista ou um registo, conforme apropriado, para fornecer os valores de parâmetro esperados por <code>query</code>.<br />O registo <code>options</code> opcional pode conter opções que afetam o comportamento da avaliação de <code>query</code> em <code>target</code>. Estas opções são específicas de <code>target</code>.<br />



## Category
Values
