---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


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


## Remarks

Belirtilen <code>startDelimiter</code> ile <code>endDelimiter</code> değeri arasındaki <code>text</code> bölümünü döndürür.    İsteğe bağlı bir sayısal <code>startIndex</code> hangi <code>startDelimiter</code> oluşumunun hesaba katılması gerektiğini belirtir.    İsteğe bağlı bir liste <code>startIndex</code> hangi <code>startDelimiter</code> oluşumunun hesaba katılması gerektiğini ve dizin oluşturmanın girişin başından mı sonundan mı başlaması gerektiğini belirtir.    <code>endIndex</code> buna benzer, ancak dizin oluşturma <code>startIndex</code> değeriyle göreli olarak yapılır.


## Examples

### Example #1 
İlk açık parantez ve takip eden ilk kapalı parantez arasındaki &#34;111 (222) 333 (444)&#34; bölümünü alır.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
İkinci açık parantez ve takip eden ilk kapalı parantez arasındaki &#34;111 (222) 333 (444)&#34; bölümünü alır.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Sondan ikinci açık parantez ve takip eden ikinci kapalı parantez arasındaki &#34;111 (222) 333 (444)&#34; bölümünü alır.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
