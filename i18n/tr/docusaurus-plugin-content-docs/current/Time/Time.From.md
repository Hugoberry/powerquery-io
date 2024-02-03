---
title: Time.From
---

# Time.From


## Description

Verilen değerden saat oluşturur.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Verilen <code>value</code> değerinden bir <code>time</code> değeri döndürür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").Verilen <code>value</code> <code>null</code> olduğunda <code>Time.From</code> <code>null</code> döndürür. Verilen <code>value</code> <code>time</code> olduğunda <code>value</code> döndürülür. Aşağıdaki türlerde olan değerler bir <code>time</code> değerine dönüştürülebilir:      <ul>        <li><code>text</code>: Metin gösteriminden bir <code>time</code> değeri. Ayrıntılar için bkz. <code>Time.FromText</code>.</li>        <li><code>datetime</code>: <code>value</code> değerinin saat bileşeni.</li>        <li><code>datetimezone</code>: <code>value</code> değerinin yerel tarih saat eşdeğerinin saat bileşeni.</li>        <li><code>number</code>: <code>value</code> ile ifade edilen tam ve kesirli günlere eşdeğer bir <code>time</code>. <code>value</code> negatifse veya 1'den büyük ya da 1'e eşitse hata döndürülür.</li>      </ul><code>value</code> başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1 
&lt;code&gt;0.7575&lt;/code&gt; değerini bir &lt;code&gt;time&lt;/code&gt; değerine dönüştürür.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; değerini bir &lt;code&gt;time&lt;/code&gt; değerine dönüştürür.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
