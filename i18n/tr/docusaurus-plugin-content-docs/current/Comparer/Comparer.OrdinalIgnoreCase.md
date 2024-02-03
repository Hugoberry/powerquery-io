---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Değerlerin karşılaştırılması için Sıralı kurallar kullanan büyük/küçük harf duyarsız bir karşılaştırma işlevi döndürür.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Sağlanan <code>x</code> ve <code>y</code> değerlerini karşılaştırmak için Sıralı kuralları kullanan, büyük/küçük harfe duyarsız karşılaştırıcı işlevi döndürür.<br />      <br />        Karşılaştırıcı işlevi iki bağımsız değişken kabul eder ve ilk değerin ikinci değerden küçük, ona eşit veya ikinciden büyük olup olmadığını temel alarak -1, 0 veya 1 döndürür.    


## Examples

### Example #1 
Büyük/küçük harf duyarsız Sıralı kuralları kullanarak &#34;Abc&#34;yi &#34;abc&#34; ile karşılaştırın. &lt;code&gt;Comparer.Ordinal&lt;/code&gt; kullanıldığında &#34;Abc&#34;nin &#34;abc&#34;den küçük olduğunu unutmayın. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
