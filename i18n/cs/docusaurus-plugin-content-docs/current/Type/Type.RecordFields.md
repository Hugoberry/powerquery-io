---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Vrátí záznam popisující pole typu záznamu, kde každé pole vráceného typu záznamu má odpovídající název a hodnotu.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Vrátí záznam popisující pole záznamu <code>type</code>. Každé pole vráceného typu záznamu má odpovídající název a hodnotu v podobě záznamu <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Umožňuje najít název a hodnotu záznamu &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
