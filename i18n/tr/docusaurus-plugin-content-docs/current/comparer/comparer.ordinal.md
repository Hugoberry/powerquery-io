---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Değerleri karşılaştırmak için Sıralı kuralları kullanan bir karşılaştırıcı işlevi döndürür.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Sağlanan `x` ve `y` değerlerini karşılaştırmak için Sıralı kuralları kullanan bir karşılaştırıcı işlevi döndürür  
  
Karşılaştırıcı işlevi iki bağımsız değişken kabul eder ve ilk değerin ikinci değerden küçük, ona eşit veya ikinciden büyük olup olmadığını temel alarak -1, 0 veya 1 döndürür.


## Examples

### Example #1
Sıralı kuralları kullanarak "encyclopædia" ve "encyclopaedia" değerlerinin eşdeğer olup olmadığını belirlemek üzere karşılaştırın. Bunların, `Comparer.FromCulture("en-US")` kullanılırken eşdeğer olduğunu unutmayın.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
