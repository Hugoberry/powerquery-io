---
title: Single.From
---

# Single.From


## Description

Verilen değerden Tek değer oluşturur.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Verilen <code>value</code> değerinden Single <code>number</code> değerini döndürür. Verilen <code>value</code> değeri <code>null</code> olduğunda <code>Single.From</code> <code>null</code> döndürür. Verilen <code>value</code> değeri Single aralığında <code>number</code> olduğunda <code>value</code> döndürülür; aksi takdirde hata döndürülür. Verilen <code>value</code> değeri başka bir türde olduğunda, önce <code>Number.FromText</code> kullanılarak <code>number</code> değerine dönüştürülür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (örneğin "tr-TR").


## Examples

### Example #1 
&lt;code&gt;&#34;1.5&#34;&lt;/code&gt; değerinin Tek &lt;code&gt;number&lt;/code&gt; değerini verir.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
