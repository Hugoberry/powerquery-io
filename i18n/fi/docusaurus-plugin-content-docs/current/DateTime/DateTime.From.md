---
title: DateTime.From
---

# DateTime.From


## Description

Luo datetime-arvon annetusta arvosta.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Palauttaa <code>datetime</code>-arvon annetusta kohteesta <code>value</code>. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).Jos annettu <code>value</code> on <code>null</code>, <code>DateTime.From</code> palauttaa kohteen <code>null</code>. Jos annettu <code>value</code> on <code>datetime</code>, palautetaan <code>value</code>. Seuraavia tyyppejä olevat arvot voidaan muuntaa <code>datetime</code>-arvoksi:      <ul>        <li><code>text</code>: <code>datetime</code>-arvo tekstiesityksestä. Jos haluat lisätietoja, katso <code>DateTime.FromText</code>.</li>        <li><code>date</code>: <code>datetime</code> ja <code>value</code> päivämääräosana sekä <code>12:00:00 AM</code> aikaosana.</li>        <li><code>datetimezone</code>: paikallinen <code>datetime</code>-vastaavuus <code>value</code>.</li>        <li><code>time</code>: <code>datetime</code> ja OLE-automaatiopäivämäärää <code>0</code> vastaava päivämäärä päivämääräosana sekä <code>value</code> aikaosana.</li>        <li><code>number</code>: <code>datetime</code>-vastine kohteen <code>value</code> ilmaisemasta OLE-automaatiopäivämäärästä. </li>      </ul>Jos <code>value</code> on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1 
Muunna &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; &lt;code&gt;datetime&lt;/code&gt;-arvoksi.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Muunna &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; &lt;code&gt;datetime&lt;/code&gt;-arvoksi.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
