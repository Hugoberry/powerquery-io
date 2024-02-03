---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Izsecina tekstā kodētā skaitļa granulārā skaitļa tipu (Int64.Type, Double.Type utt.).


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Izsecina parametra <code>text</code> granulveida numerācijas tipu (Int64.Type, Double.Type utt.). Ja <code>text</code> nav skaitlis, rodas kļūda. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, “lv-LV”).



## Category
Text
