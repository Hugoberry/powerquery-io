---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Değerlerin karşılaştırılması için Sıralı kurallar kullanan büyük/küçük harf duyarsız bir karşılaştırma işlevi döndürür.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Sağlanan `x` ve `y` değerlerini karşılaştırmak için Sıralı kuralları kullanan, büyük/küçük harfe duyarsız karşılaştırıcı işlevi döndürür.  
  
Karşılaştırıcı işlevi iki bağımsız değişken kabul eder ve ilk değerin ikinci değerden küçük, ona eşit veya ikinciden büyük olup olmadığını temel alarak -1, 0 veya 1 döndürür.


## Examples

### Example #1
Büyük/küçük harf duyarsız Sıralı kuralları kullanarak "Abc"yi "abc" ile karşılaştırın. `Comparer.Ordinal` kullanıldığında "Abc"nin "abc"den küçük olduğunu unutmayın.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
