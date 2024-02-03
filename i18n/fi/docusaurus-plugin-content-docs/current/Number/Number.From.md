---
title: Number.From
---

# Number.From


## Description

Luo luvun annetusta arvosta.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Palauttaa <code>number</code>-arvon annetusta kohteesta <code>value</code>. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).Jos annettu <code>value</code> on <code>null</code>, <code>Number.From</code> palauttaa kohteen <code>null</code>. Jos annettu <code>value</code> on <code>number</code>, palautetaan <code>value</code>. Seuraavia tyyppejä olevat arvot voidaan muuntaa <code>number</code>-arvoksi:      <ul>        <li><code>text</code>: <code>number</code>-arvo tekstiesityksestä. Tavalliset tekstimuodot käsitellään ("15", "3,423.10", "5.0E-10"). Jos haluat lisätietoja, katso <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 arvolle <code>true</code>, 0 arvolle <code>false</code>.</li>           <li><code>datetime</code>: kaksoistarkkuuksinen liukuluku, joka sisältää OLE-automaation vastaavan päivämäärän.</li>        <li><code>datetimezone</code>: kaksoistarkkuuksinen liukuluku, joka sisältää paikallista päivämäärää ja aikaa <code>value</code> vastaavan OLE-automaation päivämäärän.</li>        <li><code>date</code>: kaksoistarkkuuksinen liukuluku, joka sisältää OLE-automaation vastaavan päivämäärän.</li>        <li><code>time</code>: ilmaistaan päivien osina.</li>        <li><code>duration</code>: ilmaistaan kokonaisina päivinä ja päivien osina.</li>      </ul>Jos <code>value</code> on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1 
Hae kohteen &lt;code&gt;number&lt;/code&gt; &lt;code&gt;&#34;4&#34;&lt;/code&gt;-arvo.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Hae kohteen &lt;code&gt;number&lt;/code&gt; &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;-arvo.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Hanki kohteen &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; &lt;code&gt;number&lt;/code&gt;-arvo.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
