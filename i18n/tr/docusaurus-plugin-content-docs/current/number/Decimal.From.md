---
title: Decimal.From
---

# Decimal.From


Verilen değerden Ondalık bir değer oluşturur.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Verilen <code>value</code> değerinden Decimal <code>number</code> değerini döndürür. Verilen <code>value</code> değeri <code>null</code> olduğunda <code>Decimal.From</code> <code>null</code> döndürür. Verilen <code>value</code> değeri Decimal aralığında <code>number</code> olduğunda <code>value</code> döndürülür; aksi takdirde hata döndürülür. Verilen <code>value</code> değeri başka bir türde olduğunda, önce <code>Number.FromText</code> kullanılarak <code>number</code> değerine dönüştürülür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (örneğin "tr-TR").


## Examples

### Example #1 
&lt;code&gt;&#34;4.5&#34;&lt;/code&gt; değerinin Ondalık &lt;code&gt;number&lt;/code&gt; değerini verir.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
