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

Devolve a parte de `text` que está despois do `delimiter` que se especifique. Un `index` numérico opcional indica o `delimiter` que se debe considerar. Unha lista opcional `index` indica o `delimiter` que se debe considerar, e tamén se a indexación se debe facer desde o principio ou desde o final da entrada.


## Examples

### Example #1
Obteña a parte de "111-222-333" que está despois do (primeiro) trazo.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Obteña a parte de "111-222-333" que está despois do segundo trazo.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Obteña a parte de "111-222-333" que está despois do segundo trazo comezando desde o final.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
