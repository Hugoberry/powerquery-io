---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Devolve a parte de `text` que está entre a `startDelimiter` e a `endDelimiter` que se especifiquen. Un `startIndex` numérico opcional indica a `startDelimiter` que se debe considerar. Unha lista opcional `startIndex` indica a `startDelimiter` que se debe considerar, e tamén se a indexación se debe facer desde o principio ou desde o final da entrada. `endIndex` é similar, agás que a indexación se fai en relación a `startIndex`.


## Examples

### Example #1
Obteña a parte de "111 (222) 333 (444)" entre a (primeira) paréntese de apertura e a (primeira) paréntese de peche que está a continuación.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Obteña a parte de "111 (222) 333 (444)" entre a segunda paréntese de apertura e a primeira paréntese de peche que está a continuación.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Obteña a parte de "111 (222) 333 (444)" que está entre a segunda paréntese de apertura comezando desde o final e a segunda paréntese de peche que está a continuación.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
