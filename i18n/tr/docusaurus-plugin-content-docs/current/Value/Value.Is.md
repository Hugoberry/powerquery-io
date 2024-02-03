---
title: Value.Is
---

# Value.Is


## Description

Değerin belirtilen türle uyumlu olup olmadığını belirler.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Değerin belirtilen türle uyumlu olup olmadığını belirler. Bu, Number.Type gibi tanımlayıcı türü başvurularını kabul edebilmesi dışında M'deki "is" operatörüne eşdeğerdir.


## Examples

### Example #1 
Sayının sayı türüyle uyumlu olup olmadığını belirlemeye yönelik iki yolu karşılaştırın.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
