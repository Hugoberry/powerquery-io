---
title: Value.FromText
---

# Value.FromText


## Description

Cria um valor de tipo definido a partir de uma representação textual.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Descodifica um valor de uma representação textual, <code>text</code>, e interpreta-o como um valor com um tipo apropriado.    <code>Value.FromText</code> utiliza um valor de texto e devolve um número, um valor lógico, um valor nulo, um valor de datetime, um valor de duração ou um valor de texto. Um valor de texto vazio é interpretado como um valor nulo.    Pode também ser fornecida uma <code>culture</code> opcional (por exemplo, "en-US").



## Category
Text.Conversions from and to text
