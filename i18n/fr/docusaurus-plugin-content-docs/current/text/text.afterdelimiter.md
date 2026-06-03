---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Retourne la partie de `text` après le `delimiter` spécifié. Un numérique facultatif `index` indique quelle occurrence du `delimiter` doit être considérée. Une liste facultative `index` indique quelle occurrence du `delimiter` doit être considérée, et si l'indexation doit être effectuée à partir du début ou de la fin de l'entrée.


## Examples

### Example #1
Obtenez la partie de « 111-222-333 » après le (premier) trait d'union.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Obtenez la partie de « 111-222-333 » après le deuxième trait d'union.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Obtenez la partie de « 111-222-333 » après le deuxième trait d'union à partir de la fin.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
