---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Supprime l'entrée de métadonnées.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Supprime l'entrée de métadonnées.


## Examples

### Example #1
Supprimez toutes les métadonnées d’une valeur de texte.
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
Supprimez un seul champ de métadonnées d’une valeur de texte.
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
