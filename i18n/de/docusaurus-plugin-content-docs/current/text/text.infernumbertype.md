---
title: Text.InferNumberType
---

# Text.InferNumberType


Leitet den granularen Zahlentyp (Int64.Type, Double.Type usw.) einer im Text codierten Zahl ab.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Leitet den granularen Zahlentyp (Int64.Type, Double.Type usw.) von `text` ab. Ein Fehler wird ausgelöst, wenn `text` keine Zahl ist. Optional kann auch ein Element vom Typ `culture` angegeben werden (Beispiel: "en-US").



## Category
Text
