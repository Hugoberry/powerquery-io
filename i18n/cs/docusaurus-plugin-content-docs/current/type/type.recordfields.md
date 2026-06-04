---
title: Type.RecordFields
---

# Type.RecordFields


Vrátí záznam popisující pole typu záznamu, kde každé pole vráceného typu záznamu má odpovídající název a hodnotu.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Vrátí záznam popisující pole záznamu `type`. Každé pole vráceného typu záznamu má odpovídající název a hodnotu v podobě záznamu `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Umožňuje najít název a hodnotu záznamu `[ A = number, optional B = any]`.
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
