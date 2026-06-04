---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Devolve a parte de `text` que está antes do `delimiter` que se especifique. Un `index` numérico opcional indica o `delimiter` que se debe considerar. Unha lista opcional `index` indica o `delimiter` que se debe considerar, e tamén se a indexación se debe facer desde o principio ou desde o final da entrada.


## Examples

### Example #1
Obteña a parte de "111-222-333" que está antes do (primeiro) trazo.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Obteña a parte de "111-222-333" que está antes do segundo trazo.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Obteña a parte de "111-222-333" que está antes do segundo trazo comezando desde o final.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
