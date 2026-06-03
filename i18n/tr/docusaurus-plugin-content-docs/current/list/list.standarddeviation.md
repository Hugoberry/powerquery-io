---
title: List.StandardDeviation
---

# List.StandardDeviation


Standart sapmanın örneklem tabanlı tahminini döndürür.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Bir örneği temel alarak `numbersList` listesindeki değerlerin standart sapma tahminlerini döndürür. `numbersList` sayılardan oluşan bir listeyse bir sayı döndürülür. Boş bir liste veya `number` türü olmayan öğelerin bulunduğu bir liste üzerinde hata oluşur.


## Examples

### Example #1
1 ile 5 arasındaki sayıların standart sapmasını bulur.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
