---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Değerleri karşılaştırmak için Sıralı kuralları kullanan bir karşılaştırıcı işlevi döndürür.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Sağlanan <code>x</code> ve <code>y</code> değerlerini karşılaştırmak için Sıralı kuralları kullanan bir karşılaştırıcı işlevi döndürür<br />      <br />      Karşılaştırıcı işlevi iki bağımsız değişken kabul eder ve ilk değerin ikinci değerden küçük, ona eşit veya ikinciden büyük olup olmadığını temel alarak -1, 0 veya 1 döndürür.    


## Examples

### Example #1 
Sıralı kuralları kullanarak &#34;encyclopædia&#34; ve &#34;encyclopaedia&#34; değerlerinin eşdeğer olup olmadığını belirlemek üzere karşılaştırın. Bunların, &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt; kullanılırken eşdeğer olduğunu unutmayın. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
