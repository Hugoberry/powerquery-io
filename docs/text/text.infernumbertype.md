---
title: Text.InferNumberType
---

# Text.InferNumberType


Infers the granular number type (Int64.Type, Double.Type, and so on) of a number encoded in text.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Infers the granular number type (Int64.Type, Double.Type, and so on) of `text`. An error is raised if `text` is not a number. An optional `culture` may also be provided (for example, "en-US").



## Category
Text
