---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Standart sapmanın örneklem tabanlı tahminini döndürür.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Bir örneği temel alarak <code>numbersList</code> listesindeki değerlerin standart sapma tahminlerini döndürür.    <code>numbersList</code> sayılardan oluşan bir listeyse bir sayı döndürülür.    Boş listeler veya <code>number</code> türünde olmayan öğelerden oluşan listeler için özel durum oluşturulur.


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
