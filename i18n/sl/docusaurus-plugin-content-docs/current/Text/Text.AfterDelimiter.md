---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Vrne del števila <code>text</code> za navedenim številom <code>delimiter</code>.    Izbirna številska vrednost <code>index</code> označuje, katero ponovitev števila <code>delimiter</code> je treba upoštevati.    Izbirni seznam <code>index</code> označuje, katero ponovitev števila <code>delimiter</code> je treba upoštevati, in ali je treba indeksiranje izvesti od začetka ali konca vnosa.


## Examples

### Example #1 
Pridobite del števila &#34;111-222-333&#34; za (prvim) vezajem.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Pridobite del števila &#34;111-222-333&#34; za drugim vezajem.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Pridobite del števila &#34;111-222-333&#34; za drugim vezajem od konca.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
