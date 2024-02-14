---
title: Text.InferNumberType
---

# Text.InferNumberType


Deduce il tipo di numero granulare (Int64.Type, Double.Type e così via) di un numero codificato in testo.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Deduce il tipo di numero granulare (Int64.Type, Double.Type e così via) di <code>text</code>. Viene generato un errore se <code>text</code> non è un numero. È anche possibile specificare un valore <code>culture</code> facoltativo, (ad esempio "en-US").



## Category
Text
