---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

Avalia <code>query</code> em relação a <code>target</code> usando os parâmetros especificados em <code>parameters</code> e as opções especificadas em <code>options</code>.<br />A saída da consulta é definida por <code>target</code>.<br /><code>target</code> fornece o contexto para a operação descrita por <code>query</code>.<br /><code>query</code> descreve a consulta a ser executada em relação a <code>target</code>. <code>query</code> é expressa de uma maneira específica para <code>target</code> (por exemplo, uma instrução T-SQL).<br /> O valor opcional <code>parameters</code> pode conter uma lista ou registro conforme apropriado para fornecer os valores de parâmetro esperados por <code>query</code>.<br /> O registro opcional <code>options</code> pode conter opções que afetam o comportamento de avaliação de <code>query</code> em relação a <code>target</code>. Essas opções são específicas para <code>target</code>.<br />



## Category
Values
