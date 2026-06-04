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

Vrne del števila `text` za navedenim številom `delimiter`. Izbirna številska vrednost `index` označuje, katero ponovitev števila `delimiter` je treba upoštevati. Izbirni seznam `index` označuje, katero ponovitev števila `delimiter` je treba upoštevati, in ali je treba indeksiranje izvesti od začetka ali konca vnosa.


## Examples

### Example #1
Pridobite del števila"111-222-333"za (prvim) vezajem.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Pridobite del števila"111-222-333"za drugim vezajem.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Pridobite del števila"111-222-333"za drugim vezajem od konca.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
