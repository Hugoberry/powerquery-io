---
title: Text.Combine
---

# Text.Combine


Bir metin değeri listesini tek bir metin değerine birleştirir.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

<code>texts</code> metin değerleri listesini tek bir metin değeri olarak birleştirmenin sonucunu döndürür. <code>texts</code> içindeki tüm <code>null</code> değerleri yoksayılır.    Birleştirilmiş son metinde kullanılan isteğe bağlı bir <code>separator</code> belirtilebilir.


## Examples

### Example #1 
&#34;Seattle&#34; ve &#34;WA&#34; metin değerlerini birleştirir.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
&#34;Seattle&#34; ve &#34;WA&#34; metin değerlerini virgül ve boşluk ile ayrılmış şekilde birleştirir.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
&#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; ve &#34;WA&#34; değerlerini virgül ve boşluk ile ayrılmış şekilde birleştirin. (&lt;code&gt;null&lt;/code&gt; değerinin yoksayıldığına dikkat edin.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
