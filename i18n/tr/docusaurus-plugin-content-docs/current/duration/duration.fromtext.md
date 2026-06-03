---
title: Duration.FromText
---

# Duration.FromText


Metinsel geçen zaman biçimlerinden bir süre değeri döndürür (g.s:d:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Belirtilen metinden (`text`) bir süre değeri döndürür. Şu biçimler bu işlev tarafından ayrıştırılabilir:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Tüm aralıklar dahildir)

-   ddd: Gün sayısı.
-   hh: 0 ila 23 arasında saat sayısı.
-   mm: 0 ila 59 arasında dakika sayısı.
-   ss: 0 ila 59 arasında saniye sayısı.
-   ff: 0 ila 9999999 arasında kesirli saniye sayısı.


## Examples

### Example #1
`"2.05:55:20"` değerini bir `duration` değerine dönüştürür.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
