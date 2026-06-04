---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Tiek joslota metadatu ievade.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Tiek joslota metadatu ievade.


## Examples

### Example #1
Noņemt visus metadatus no teksta vērtības.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2])
)
```

Result: 
```powerquery
[]
```


### Example #2
Noņemiet tikai vienu metadatu lauku no teksta vērtības.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2], {"a"})
)
```

Result: 
```powerquery
[b = 2]
```




## Category
Metadata
