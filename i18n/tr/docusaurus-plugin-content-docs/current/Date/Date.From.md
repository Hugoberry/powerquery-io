---
title: Date.From
---

# Date.From


## Description

Verilen değerden tarih oluşturur.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Verilen <code>value</code> değerinden bir <code>date</code> değeri döndürür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").Verilen <code>value</code> <code>null</code> ise <code>Date.From</code>, <code>null</code> döndürür. Verilen <code>value</code> <code>date</code> ise <code>value</code> döndürülür. Aşağıdaki türde olan değerler bir <code>date</code> değerine dönüştürülebilir:      <ul>        <li><code>text</code>: Metin gösteriminden bir <code>date</code> değeri. Ayrıntılar için bkz. <code>Date.FromText</code>.</li>        <li><code>datetime</code>: <code>value</code> değerinin tarih bileşeni.</li>        <li><code>datetimezone</code>: <code>value</code> değerinin yerel tarih saat eşdeğerinin tarih bileşeni.</li>        <li><code>number</code>: <code>value</code> ile ifade edilen OLE Otomasyon Tarihinin tarih saat eşdeğerinin tarih bileşeni.</li>      </ul><code>value</code> başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1 
&lt;code&gt;43910&lt;/code&gt; değerini bir &lt;code&gt;date&lt;/code&gt; değerine dönüştürür.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; değerini bir &lt;code&gt;date&lt;/code&gt; değerine dönüştürür.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
