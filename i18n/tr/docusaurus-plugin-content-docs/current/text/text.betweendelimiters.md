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

Belirtilen `startDelimiter` ile `endDelimiter` değeri arasındaki `text` bölümünü döndürür. İsteğe bağlı bir sayısal `startIndex` hangi `startDelimiter` oluşumunun hesaba katılması gerektiğini belirtir. İsteğe bağlı bir liste `startIndex` hangi `startDelimiter` oluşumunun hesaba katılması gerektiğini ve dizin oluşturmanın girişin başından mı sonundan mı başlaması gerektiğini belirtir. `endIndex` buna benzer, ancak dizin oluşturma `startIndex` değeriyle göreli olarak yapılır.


## Examples

### Example #1
İlk açık parantez ve takip eden ilk kapalı parantez arasındaki "111 (222) 333 (444)" bölümünü alır.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
İkinci açık parantez ve takip eden ilk kapalı parantez arasındaki "111 (222) 333 (444)" bölümünü alır.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Sondan ikinci açık parantez ve takip eden ikinci kapalı parantez arasındaki "111 (222) 333 (444)" bölümünü alır.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
