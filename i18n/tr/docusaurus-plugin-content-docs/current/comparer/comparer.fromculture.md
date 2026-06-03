---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Belirtilen kültürü ve büyük/küçük harfe duyarlılığı temel alan bir karşıtlık işlevi döndürür.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Karşılaştırma yapmak için `culture` yanı sıra, `ignoreCase` tarafından belirtilen büyük/küçük harf duyarlılığını kullanan bir karşılaştırıcı işlevi döndürür.  
  
Karşılaştırıcı işlevi iki bağımsız değişken kabul eder ve ilk değerin ikinci değerden küçük, ona eşit veya ikinciden büyük olup olmadığını temel alarak -1, 0 veya 1 döndürür.  
  
`ignoreCase` için varsayılan değer false'tur. Bu `culture`, .NET framework (ör. "en-US") tarafından desteklenen yerel ayarlardan biri olmalıdır .


## Examples

### Example #1
Değerlerin eşit olup olmadığını belirlemek için "en-US" yerel ayarını kullanarak "a" ve "A" karşılaştırması yapın.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Değerlerin eşit olup olmadığını belirlemek için büyük/küçük harfi yok sayarak ve "en-US" yerel ayarını kullanarak "a" ve "A" karşılaştırması yapın.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
