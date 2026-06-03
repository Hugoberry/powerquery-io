---
title: Text.InferNumberType
---

# Text.InferNumberType


Wnioskuje szczegółowy typ liczby (Int64.Type, Double.Type itp.) liczby zakodowanej w tekście.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Wnioskuje szczegółowy typ liczby (Int64.Type, Double.Type itp.) dla elementu `text`. Błąd jest wywoływany, jeśli element `text` nie jest liczbą. Można także określić opcjonalny element `culture` (na przykład „en-US”).



## Category
Text
