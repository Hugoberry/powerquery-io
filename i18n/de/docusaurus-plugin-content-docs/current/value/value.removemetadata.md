---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Entfernt die Metadaten aus der Eingabe.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Entfernt die Metadaten aus der Eingabe.


## Examples

### Example #1
Entfernen Sie alle Metadaten aus einem Textwert.
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
Entfernen Sie nur ein Feld mit Metadaten aus einem Textwert.
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
