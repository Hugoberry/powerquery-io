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

Mengembalikan bahagian `text` sebelum `delimiter` yang ditentukan. Numerik pilihan `index` yang menandakan kejadian `delimiter` yang perlu dipertimbangkan. Senarai pilihan `index` yang menandakan kejadian `delimiter` yang perlu dipertimbangkan, serta sama ada pengindeksan perlu dilakukan dari mula atau hujung input.


## Examples

### Example #1
Dapatkan bahagian "111-222-333" sebelum sempang (pertama).
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Dapatkan bahagian "111-222-333" sebelum sempang kedua.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Dapatkan bahagian "111-222-333" sebelum sempang kedua dari hujung.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
