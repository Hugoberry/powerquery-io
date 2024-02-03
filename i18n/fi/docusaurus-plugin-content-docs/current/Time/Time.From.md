---
title: Time.From
---

# Time.From


## Description

Luo ajan annetusta arvosta.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Palauttaa <code>time</code>-arvon annetusta kohteesta <code>value</code>. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).Jos annettu <code>value</code> on <code>null</code>, <code>Time.From</code> palauttaa kohteen <code>null</code>. Jos annettu <code>value</code> on <code>time</code>, palautetaan <code>value</code>. Seuraavia tyyppejä olevat arvot voidaan muuntaa <code>time</code>-arvoksi:      <ul>        <li><code>text</code>: <code>time</code>-arvo tekstiesityksestä. Jos haluat lisätietoja, katso <code>Time.FromText</code>.</li>        <li><code>datetime</code>: kohteen <code>value</code> aikaosa.</li>        <li><code>datetimezone</code>: kohdetta <code>value</code> vastaavan paikallisen datetime-arvon aikaosa.</li>        <li><code>number</code>: <code>time</code>, joka vastaa kohteen <code>value</code> ilmaisemia kokonaisia päiviä ja päivien osia. Jos <code>value</code> on negatiivinen tai vähintään 1, palautetaan virhe.</li>      </ul>Jos <code>value</code> on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1 
Muunna &lt;code&gt;0.7575&lt;/code&gt; &lt;code&gt;time&lt;/code&gt;-arvoksi.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Muunna &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; &lt;code&gt;time&lt;/code&gt;-arvoksi.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
