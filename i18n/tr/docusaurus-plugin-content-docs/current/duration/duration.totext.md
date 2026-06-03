---
title: Duration.ToText
---

# Duration.ToText


"g.s:d:s" biçiminde metni döndürür.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Belirtilen `duration` süre değerinin "gün.saat:dakika:sn" biçiminde bir metinsel gösterimini döndürür.

-   `duration`: Metinsel temsilin hesaplandığı bir `duration`.
-   `format`: *(İsteğe bağlı)* Kullanımdan kaldırıldı, null değilse hata verecektir.


## Examples

### Example #1
`#duration(2, 5, 55, 20)` değerini bir metin değerine dönüştürür.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
