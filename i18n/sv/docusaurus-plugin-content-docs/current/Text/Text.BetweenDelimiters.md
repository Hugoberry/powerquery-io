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

Returnerar delen av <code>text</code> mellan det angivna <code>startDelimiter</code> och <code>endDelimiter</code>.    En valfri numerisk <code>startIndex</code> indikerar vilken förekomst av <code>startDelimiter</code> som ska övervägas.    En valfri lista <code>startIndex</code> indikerar vilken förekomst av <code>startDelimiter</code> som ska övervägas, samt om indexering ska ske från starten eller slutet av indata.    <code>endIndex</code> är liknande, förutom att indexering görs relativt till <code>startIndex</code>.


## Examples

### Example #1 
Hämtar delen av &#34;111 (222) 333 (444)&#34; mellan den (första) öppna parentesen och den (första) stängda parentesen som kommer efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Hämtar delen av &#34;111 (222) 333 (444)&#34; mellan den andra öppna parentesen och den (första) stängda parentesen som kommer efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Hämtar delen av &#34;111 (222) 333 (444)&#34; mellan den andra öppna parentesen från slutet och den andra stängda parentesen som kommer efter.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
