---
title: DateTimeZone.From
---

# DateTimeZone.From


Verilen değerden bir datetimezone oluşturur.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Verilen <code>value</code> değerinden bir <code>datetimezone</code> değeri döndürür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "en-US").Verilen <code>value</code> <code>null</code> olduğunda <code>DateTimeZone.From</code>, <code>null</code> döndürür. Verilen <code>value</code> <code>datetimezone</code> ise <code>value</code> döndürülür. Aşağıdaki türde olan değerler bir <code>datetimezone</code> değerine dönüştürülebilir:      <ul>        <li><code>text</code>: Metin gösteriminden bir <code>datetimezone</code> değeri. Ayrıntılar için bkz. <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: Tarih bileşeni olarak <code>value</code>, saat bileşeni olarak <code>00:00:00</code> ve yerel saat dilimine karşılık gelen uzaklığı içeren bir <code>datetimezone</code>.</li>        <li><code>datetime</code>: Tarih saat olarak <code>value</code> içeren bir <code>datetimezone</code> ve yerel saat dilimine karşılık gelen uzaklık.</li>        <li><code>time</code>: Tarih bileşeni olarak <code>0</code> OLE Otomasyon Tarihinin tarih eşdeğerini, saat bileşeni olarak <code>value</code> değerini ve yerel saat dilimine karşılık gelen uzaklığı içeren bir <code>datetimezone</code>.</li>        <li><code>number</code>: <code>value</code> ile ifade edilen OLE Otomasyon Tarihinin tarih saat eşdeğeri ve yerel saat dilimine karşılık gelen uzaklığı içeren bir <code>datetimezone</code>.</li>      </ul><code>value</code> başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1 
&lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; değerini bir &lt;code&gt;datetimezone&lt;/code&gt; değerine dönüştürür.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
