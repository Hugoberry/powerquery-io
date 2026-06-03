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

Returnerar delen av `text` innan det angivna `delimiter`. En valfri numerisk `index` indikerar vilken förekomst av `delimiter` som ska övervägas. En valfri lista `index` indikerar vilken förekomst av `delimiter` som ska övervägas, samt om indexering skall göras från starten eller slutet av indata.


## Examples

### Example #1
Hämtar delen av "111-222-333" före det (första) bindestrecket.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Hämtar delen av "111-222-333" före det andra bindestrecket.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Hämtar delen av "111-222-333" före det andra bindestrecket från slutet.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
