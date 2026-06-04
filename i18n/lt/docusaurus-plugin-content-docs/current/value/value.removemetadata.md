---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Perduodama metaduomenų įvestis.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Perduodama metaduomenų įvestis.


## Examples

### Example #1
Pašalinkite visus metaduomenis iš tekstinės reikšmės.
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
Pašalinkite tik vieną metaduomenų lauką iš teksto reikšmės.
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
