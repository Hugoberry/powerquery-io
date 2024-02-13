---
title: Number.ToText
---

# Number.ToText


Belirtilen sayıyı metne dönüştürür.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

<code>number</code> sayısal değerini <code>format</code> ile belirtilen biçime göre bir metin değerine döndürür.<br />    <br />    Biçim, sayının nasıl dönüştürülmesi gerektiğini gösteren bir metin değeridir. Desteklenen biçim değerleri hakkında daha fazla ayrıntı için https://go.microsoft.com/fwlink/?linkid=2241210 ve https://go.microsoft.com/fwlink/?linkid=2240884 sayfalarına gidin.<br />    <br />   <code>format</code> değerinin kültüre bağlı davranışını kontrol etmek için isteğe bağlı bir <code>culture</code> (örneğin, “tr-TR”) sağlanabilir.


## Examples

### Example #1 
Bir sayıyı biçim belirtmeden metne dönüştürün.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Bir sayıyı üstel biçime dönüştürün.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Bir sayıyı yalnızca bir ondalık basamaklı yüzdeye dönüştürün.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
