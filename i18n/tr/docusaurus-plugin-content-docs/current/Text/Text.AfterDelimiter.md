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

Belirtilen <code>delimiter</code> değerinden sonraki <code>text</code> bölümünü döndürür.    İsteğe bağlı bir sayısal <code>index</code> hangi <code>delimiter</code> oluşumunun hesaba katılması gerektiğini belirtir.    İsteğe bağlı bir liste <code>index</code> hangi <code>delimiter</code> oluşumunun hesaba katılması gerektiğini ve dizin oluşturmanın girişin başından mı sonundan mı başlaması gerektiğini belirtir.


## Examples

### Example #1 
İlk kısa çizgiden sonraki &#34;111-222-333&#34; bölümünü alır.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
İkinci kısa çizgiden sonraki &#34;111-222-333&#34; bölümünü alır.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Sondan ikinci kısa çizgiden sonraki &#34;111-222-333&#34; bölümünü alır.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
