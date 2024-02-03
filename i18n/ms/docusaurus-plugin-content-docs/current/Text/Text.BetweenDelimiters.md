---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

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


## Details

Mengembalikan bahagian <code>text</code> antara <code>startDelimiter</code> yang ditentukan dan <code>endDelimiter</code>.    Numerik pilihan <code>startIndex</code> yang menandakan kejadian <code>startDelimiter</code> yang perlu dipertimbangkan.    Senarai pilihan <code>startIndex</code> yang menandakan kejadian <code>startDelimiter</code> yang perlu dipertimbangkan, serta sama ada pengindeksan perlu dilakukan dari mula atau hujung input.    <code>endIndex</code> serupa, kecuali pengindeksan dilakukan relatif kepada <code>startIndex</code>.


## Examples

### Example #1 
Dapatkan bahagian &#34;111 (222) 333 (444)&#34; antara tanda kurung terbuka (pertama) dan tanda kurung tutup (pertama) yang mengikutinya.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Dapatkan bahagian &#34;111 (222) 333 (444)&#34; antara tanda kurung terbuka kedua dan tanda kurung tutup kedua yang mengikutinya.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Dapatkan bahagian &#34;111 (222) 333 (444)&#34; antara tanda kurung terbuka kedua dari hujung dan tanda kurung tutup kedua yang mengikutinya.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
