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

Mengembalikan bahagian <code>text</code> selepas <code>delimiter</code> yang ditentukan.    Numerik pilihan <code>index</code> yang menandakan kejadian <code>delimiter</code> yang perlu dipertimbangkan.    Senarai pilihan <code>index</code> yang menandakan kejadian <code>delimiter</code> yang perlu dipertimbangkan, serta sama ada pengindeksan perlu dilakukan dari mula atau hujung input.


## Examples

### Example #1 
Dapatkan bahagian &#34;111-222-333&#34; selepas sempang (pertama).
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Dapatkan bahagian &#34;111-222-333&#34; selepas sempang kedua.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Dapatkan bahagian &#34;111-222-333&#34; selepas sempang kedua dari hujung.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
