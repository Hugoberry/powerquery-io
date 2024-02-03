---
title: Date.From
---

# Date.From


## Description

Luo päivämäärän annetusta arvosta.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Palauttaa <code>date</code>-arvon annetusta kohteesta <code>value</code>. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).Jos annettu <code>value</code> on <code>null</code>, <code>Date.From</code> palauttaa kohteen <code>null</code>. Jos annettu <code>value</code> on <code>date</code>, palautetaan <code>value</code>. Seuraavia tyyppejä olevat arvot voidaan muuntaa <code>date</code>-arvoksi:      <ul>        <li><code>text</code>: <code>date</code>-arvo tekstiesityksestä. Jos haluat lisätietoja, katso <code>Date.FromText</code>.</li>        <li><code>datetime</code>: kohteen <code>value</code> päivämääräosa.</li>        <li><code>datetimezone</code>: kohdetta <code>value</code> vastaavan paikallisen datetime-arvon päivämääräosa.</li>        <li><code>number</code>: kohteen <code>value</code> ilmaisema OLE-automaatiopäivämäärää vastaavan datetime-arvon päivämääräosa.</li>      </ul>Jos <code>value</code> on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1 
Muunna &lt;code&gt;43910&lt;/code&gt; &lt;code&gt;date&lt;/code&gt;-arvoksi.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Muunna &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; &lt;code&gt;date&lt;/code&gt;-arvoksi.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
