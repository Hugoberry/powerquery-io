---
title: Percentage.From
---

# Percentage.From


Verilen değerden bir yüzde değeri döndürür.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Verilen `value` değerinden bir `percentage` değeri döndürür. Verilen `value` `null` olduğunda `Percentage.From` `null` döndürür. Verilen `value` sonunda yüzde sembolü bulunan `text` olduğunda dönüştürülen ondalık sayı döndürülür. Aksi takdirde, değer `Number.From` kullanılarak bir `number` değerine dönüştürülür. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (örneğin, "tr-TR").


## Examples

### Example #1
`"12.3%"` `percentage` değerini al.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
