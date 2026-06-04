---
title: Type.RecordFields
---

# Type.RecordFields


Vráti záznam popisujúci polia typu záznamu, kde každé pole vráteného typu záznamu má zodpovedajúci názov a zodpovedajúcu hodnotu.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Vráti záznam popisujúci polia záznamu `type`, kde každé pole vráteného typu záznamu má zodpovedajúci názov a zodpovedajúcu hodnotu, v tvare záznamu `[ Type = typ, Optional = logická hodnota ]`.


## Examples

### Example #1
Nájdi názov a hodnotu záznamu `[ A = číslo, voliteľne B = ľubovoľné]`.
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
