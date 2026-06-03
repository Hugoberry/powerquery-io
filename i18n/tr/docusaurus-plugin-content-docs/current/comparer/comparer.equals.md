---
title: Comparer.Equals
---

# Comparer.Equals


Verilen iki değer üzerinde yapılan eşitlik kontrolüne bağlı olarak mantıksal bir değer döndürür.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Sağlanan `comparer` öğesini kullanarak `x` ve `y` olmak üzere verilen iki değer üzerinde gerçekleştirilen eşitlik kontrolüne göre `mantıksal` bir değer döndürür.

`comparer`, karşılaştırmanın denetlenmesi için kullanılan bir `Karşılaştırıcıdır`. Karşılaştırıcı, iki bağımsız değişken kabul eden ve ilk değerin ikinci değerden küçük, ona eşit veya ikinciden büyük olup olmadığını temel alarak -1, 0 veya 1 döndüren bir işlevdir. Karşılaştırıcılar, büyük/küçük harfe duyarlı olmayan veya kültüre ve yerel ayara duyarlı karşılaştırmaların sağlanması için kullanılabilir.

Aşağıdaki yerleşik karşılaştırıcılar formül dilinde kullanılabilir:

-   `Comparer.Ordinal`: Tam sıralı karşılaştırma gerçekleştirilmek için kullanılır
-   `Comparer.OrdinalIgnoreCase`: Tam sıralı büyük/küçük harfe duyarlı olmayan karşılaştırma gerçekleştirmek için kullanılır
-   `Comparer.FromCulture`: Kültüre duyarlı karşılaştırma gerçekleştirmek için kullanılır


## Examples

### Example #1
Değerlerin eşit olup olmadığını belirlemek için "en-US" yerel ayarını kullanarak "1" ve "A" karşılaştırması yapın.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
