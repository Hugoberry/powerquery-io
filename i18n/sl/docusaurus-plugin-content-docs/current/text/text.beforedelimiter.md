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

Vrne del števila `text` pred navedenim številom `delimiter`. Izbirna številska vrednost `index` označuje, katero ponovitev števila `delimiter` je treba upoštevati. Izbirni seznam `index` označuje, katero ponovitev števila `delimiter` je treba upoštevati, in ali je treba indeksiranje izvesti od začetka ali konca vnosa.


## Examples

### Example #1
Pridobite del števila"111-222-333"pred (prvim) vezajem.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Pridobite del števila"111-222-333"pred drugim vezajem.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Pridobite del števila"111-222-333"pred drugim vezajem od konca.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
