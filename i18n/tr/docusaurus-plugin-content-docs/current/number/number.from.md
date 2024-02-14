---
title: Number.From
---

# Number.From


Verilen değerden sayı oluşturur.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Verilen <code>value</code> değerinden bir <code>number</code> değeri döndürür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").Verilen <code>value</code> <code>null</code> olduğunda <code>Number.From</code> <code>null</code> döndürür. Verilen <code>value</code> <code>number</code> olduğunda <code>value</code> döndürülür. Aşağıdaki türlerde olan değerler bir <code>number</code> değerine dönüştürülebilir:      <ul>        <li><code>text</code>: Metin gösteriminden bir <code>number</code> değeri. Genel metin biçimleri işlenir ("15", "3.423,10", "5,0E-10"). Ayrıntılar için bkz. <code>Number.FromText</code>.</li>        <li><code>logical</code>: <code>true</code> için 1, <code>false</code> için 0.</li>        <li><code>datetime</code>: OLE Otomasyonu tarih eşdeğerini içeren çift duyarlıklı kayan noktalı sayı.</li>        <li><code>datetimezone</code>: <code>value</code> yerel tarih ve saatinin OLE Otomasyonu tarih eşdeğerini içeren çift duyarlıklı kayan noktalı sayı.</li>        <li><code>date</code>: OLE Otomasyonu tarih eşdeğerini içeren çift duyarlıklı kayan noktalı sayı.</li>        <li><code>time</code>: Kesirli günler ile ifade edilir.</li>        <li><code>duration</code>: Tam ve kesirli günler ile ifade edilir.</li>      </ul><code>value</code> başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; sayısının &lt;code&gt;number&lt;/code&gt; değerini alır.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; öğesinin &lt;code&gt;number&lt;/code&gt; değerini alır.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
&lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; &lt;code&gt;number&lt;/code&gt; değerini al.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
