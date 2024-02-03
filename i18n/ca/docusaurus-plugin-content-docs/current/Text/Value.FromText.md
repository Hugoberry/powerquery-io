---
title: Value.FromText
---

# Value.FromText


## Description

Crea un valor de tipatge fort a partir d&#39;una representació textual.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Descodifica un valor a partir d'una representació textual, <code>text</code>, i l'interpreta com un valor amb un tipus adequat.    L'element <code>Value.FromText</code> agafa un valor de text i retorna un nombre o un valor lògic, nul, datetime, de duració o de text. El valor de text buit s'interpreta com un valor nul.    També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").



## Category
Text.Conversions from and to text
