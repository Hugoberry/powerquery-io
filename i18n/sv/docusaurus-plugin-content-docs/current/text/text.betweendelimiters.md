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

Returnerar delen av `text` mellan det angivna `startDelimiter` och `endDelimiter`. En valfri numerisk `startIndex` indikerar vilken förekomst av `startDelimiter` som ska övervägas. En valfri lista `startIndex` indikerar vilken förekomst av `startDelimiter` som ska övervägas, samt om indexering ska ske från starten eller slutet av indata. `endIndex` är liknande, förutom att indexering görs relativt till `startIndex`.


## Examples

### Example #1
Hämtar delen av "111 (222) 333 (444)" mellan den (första) öppna parentesen och den (första) stängda parentesen som kommer efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Hämtar delen av "111 (222) 333 (444)" mellan den andra öppna parentesen och den (första) stängda parentesen som kommer efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Hämtar delen av "111 (222) 333 (444)" mellan den andra öppna parentesen från slutet och den andra stängda parentesen som kommer efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
