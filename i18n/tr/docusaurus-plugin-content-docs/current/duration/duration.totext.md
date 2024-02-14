---
title: Duration.ToText
---

# Duration.ToText


&#34;g.s:d:s&#34; biçiminde metni döndürür.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Belirtilen <code>duration</code> süre değerinin "gün.saat:dakika:sn" biçiminde bir metinsel gösterimini döndürür. <ul>        <li><code>duration</code>: Metinsel gösterimin hesaplanması için kullanılan <code>süredir</code>.</li>  <li><code>format</code>: <i>[İsteğe bağlı]</i> Kullanım dışıdır, değer null değilse hata oluşur</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; değerini bir metin değerine dönüştürür.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
