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

Mengembalikan bahagian <code>text</code> sebelum <code>delimiter</code> yang ditentukan.    Numerik pilihan <code>index</code> yang menandakan kejadian <code>delimiter</code> yang perlu dipertimbangkan.    Senarai pilihan <code>index</code> yang menandakan kejadian <code>delimiter</code> yang perlu dipertimbangkan, serta sama ada pengindeksan perlu dilakukan dari mula atau hujung input.


## Examples

### Example #1 
Dapatkan bahagian &#34;111-222-333&#34; sebelum sempang (pertama).
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Dapatkan bahagian &#34;111-222-333&#34; sebelum sempang kedua.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Dapatkan bahagian &#34;111-222-333&#34; sebelum sempang kedua dari hujung.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
