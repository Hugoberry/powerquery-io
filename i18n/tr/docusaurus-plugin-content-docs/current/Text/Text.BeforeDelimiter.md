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

Belirtilen <code>delimiter</code> değerinden önceki <code>text</code> bölümünü döndürür.    İsteğe bağlı bir sayısal <code>index</code> hangi <code>delimiter</code> oluşumunun hesaba katılması gerektiğini belirtir.    İsteğe bağlı bir liste <code>index</code> hangi <code>delimiter</code> oluşumunun hesaba katılması gerektiğini ve dizin oluşturmanın girişin başından mı sonundan mı başlaması gerektiğini belirtir.


## Examples

### Example #1 
İlk kısa çizgiden önceki &#34;111-222-333&#34; bölümünü alır.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
İkinci kısa çizgiden önceki &#34;111-222-333&#34; bölümünü alır.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Sondan ikinci kısa çizgiden önceki &#34;111-222-333&#34; bölümünü alır.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
