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

Belirtilen metinden (<code>text</code>) bir süre değeri döndürür. Şu biçimler bu işlev tarafından ayrıştırılabilir: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Tüm aralıklar dahildir)<br />        ddd: Gün sayısı.<br />        hh: 0 ila 23 arasında saat sayısı.<br />        mm: 0 ila 59 arasında dakika sayısı.<br />        ss: 0 ila 59 arasında saniye sayısı.<br />        ff: 0 ila 9999999 arasında kesirli saniye sayısı.


## Examples

### Example #1 
&lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; değerini bir &lt;code&gt;duration&lt;/code&gt; değerine dönüştürür.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
