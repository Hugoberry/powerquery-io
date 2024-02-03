---
title: DateTime.From
---

# DateTime.From


## Description

Verilen değerden bir datetime oluşturur.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Verilen <code>value</code> değerinden bir <code>datetime</code> değeri döndürür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").Verilen <code>value</code> <code>null</code> ise <code>DateTime.From</code> <code>null</code> döndürür. Verilen <code>value</code> <code>datetime</code> ise <code>value</code> döndürülür. Aşağıdaki türde olan değerler bir <code>datetime</code> değerine dönüştürülebilir:      <ul>        <li><code>text</code>: Metinsel gösterimden bir <code>datetime</code> değeri. Ayrıntılar için bkz. <code>DateTime.FromText</code>.</li>        <li><code>date</code>: Tarih bileşeni olarak <code>value</code> ve saat bileşeni olarak <code>00:00:00</code> içeren bir <code>datetime</code>.</li>        <li><code>datetimezone</code>: <code>value</code> değerinin yerel <code>datetime</code> eşdeğeri.</li>        <li><code>time</code>: Tarih bileşeni olarak <code>0</code> OLE Otomasyon Tarihinin tarih eşdeğeri ve saat bileşeni olarak <code>value</code> içeren bir <code>datetime</code>.</li>        <li><code>number</code>: <code>value</code> ile ifade edilen OLE Otomasyon Tarihinin <code>datetime</code> eşdeğeri. </li>      </ul><code>value</code> başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1 
&lt;code&gt;#time(06, 45, 12)&lt;/code&gt; değerini bir &lt;code&gt;datetime&lt;/code&gt; değerine dönüştürür.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
&lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; değerini bir &lt;code&gt;datetime&lt;/code&gt; değerine dönüştürür.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
