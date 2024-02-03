---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Wnioskuje szczegółowy typ liczby (Int64.Type, Double.Type itp.) liczby zakodowanej w tekście.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Wnioskuje szczegółowy typ liczby (Int64.Type, Double.Type itp.) dla elementu <code>text</code>. Błąd jest wywoływany, jeśli element <code>text</code> nie jest liczbą. Można także określić opcjonalny element <code>culture</code> (na przykład „en-US”).



## Category
Text
