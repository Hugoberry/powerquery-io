---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Eltávolítja a bemeneti érték metaadatait.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Eltávolítja a bemeneti érték metaadatait.


## Examples

### Example #1
Az összes metaadat eltávolítása egy szöveges értékből.
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
Csak egy metaadatmező eltávolítása egy szöveges értékből.
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
