---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Vráti záznam popisujúci polia typu záznamu, kde každé pole vráteného typu záznamu má zodpovedajúci názov a zodpovedajúcu hodnotu.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Vráti záznam popisujúci polia záznamu <code>type</code>, kde každé pole vráteného typu záznamu má zodpovedajúci názov a zodpovedajúcu hodnotu, v tvare záznamu <code>[ Type = typ, Optional = logická hodnota ]</code>.


## Examples

### Example #1 
Nájdi názov a hodnotu záznamu &lt;code&gt;[ A = číslo, voliteľne B = ľubovoľné]&lt;/code&gt;.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
