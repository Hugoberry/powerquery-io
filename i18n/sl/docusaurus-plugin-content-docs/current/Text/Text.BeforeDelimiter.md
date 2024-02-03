---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Vrne del števila <code>text</code> pred navedenim številom <code>delimiter</code>.    Izbirna številska vrednost <code>index</code> označuje, katero ponovitev števila <code>delimiter</code> je treba upoštevati.    Izbirni seznam <code>index</code> označuje, katero ponovitev števila <code>delimiter</code> je treba upoštevati, in ali je treba indeksiranje izvesti od začetka ali konca vnosa.


## Examples

### Example #1 
Pridobite del števila &#34;111-222-333&#34; pred (prvim) vezajem.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Pridobite del števila &#34;111-222-333&#34; pred drugim vezajem.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Pridobite del števila &#34;111-222-333&#34; pred drugim vezajem od konca.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
