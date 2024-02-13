---
title: Value.FromText
---

# Value.FromText


Cria um valor fortemente tipado a partir de uma representação textual.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Decodifica um valor de uma representação textual, <code>text</code>, e o interpreta como um valor com um tipo apropriado.    <code>Value.FromText</code> assume um valor de texto e retorna um número, um valor lógico, um valor nulo, um valor datetime, um valor de duração ou um valor de texto. O valor de texto vazio é interpretado como um valor nulo.    Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").



## Category
Text.Conversions from and to text
