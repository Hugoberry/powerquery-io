---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Belirtilen kültürü ve büyük/küçük harfe duyarlılığı temel alan bir karşıtlık işlevi döndürür.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Karşılaştırma yapmak için <code>culture</code> yanı sıra, <code>ignoreCase</code> tarafından belirtilen büyük/küçük harf duyarlılığını kullanan bir karşılaştırıcı işlevi döndürür.<br />       <br />       Karşılaştırıcı işlevi iki bağımsız değişken kabul eder ve ilk değerin ikinci değerden küçük, ona eşit veya ikinciden büyük olup olmadığını temel alarak -1, 0 veya 1 döndürür.<br />      <br />      <code>ignoreCase</code> için varsayılan değer false'tur. Bu <code>culture</code>, .NET framework (ör. "en-US") tarafından desteklenen yerel ayarlardan biri olmalıdır .    


## Examples

### Example #1 
Değerlerin eşit olup olmadığını belirlemek için &#34;en-US&#34; yerel ayarını kullanarak &#34;a&#34; ve &#34;A&#34; karşılaştırması yapın.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Değerlerin eşit olup olmadığını belirlemek için büyük/küçük harfi yok sayarak ve &#34;en-US&#34; yerel ayarını kullanarak &#34;a&#34; ve &#34;A&#34; karşılaştırması yapın.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
