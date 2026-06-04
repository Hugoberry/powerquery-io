---
title: Text.InferNumberType
---

# Text.InferNumberType


Izsecina tekstā kodētā skaitļa granulārā skaitļa tipu (Int64.Type, Double.Type utt.).


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Izsecina parametra `text` granulveida numerācijas tipu (Int64.Type, Double.Type utt.). Ja `text` nav skaitlis, rodas kļūda. Var norādīt arī neobligātu parametru `culture` (piemēram, “lv-LV”).



## Category
Text
