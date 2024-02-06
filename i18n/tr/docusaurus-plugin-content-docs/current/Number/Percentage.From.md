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

Verilen <code>value</code> değerinden bir <code>percentage</code> değeri döndürür. Verilen <code>value</code> <code>null</code> olduğunda <code>Percentage.From</code> <code>null</code> döndürür. Verilen <code>value</code> sonunda yüzde sembolü bulunan <code>text</code> olduğunda dönüştürülen ondalık sayı döndürülür. Aksi takdirde, değer <code>Number.From</code> kullanılarak bir <code>number</code> değerine dönüştürülür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (örneğin, "tr-TR").


## Examples

### Example #1 
&lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; &lt;code&gt;percentage&lt;/code&gt; değerini al.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
