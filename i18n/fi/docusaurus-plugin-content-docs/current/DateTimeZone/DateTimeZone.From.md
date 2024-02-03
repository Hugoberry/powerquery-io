---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Luo datetimezone-arvon annetusta arvosta.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Palauttaa <code>datetimezone</code>-arvon annetusta kohteesta <code>value</code>. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).Jos annettu <code>value</code> on <code>null</code>, <code>DateTimeZone.From</code> palauttaa kohteen <code>null</code>. Jos annettu <code>value</code> on <code>datetimezone</code>, palautetaan <code>value</code>. Seuraavia tyyppejä olevat arvot voidaan muuntaa <code>datetimezone</code>-arvoksi:      <ul>        <li><code>text</code>: <code>datetimezone</code>-arvo tekstiesityksestä. Jos haluat lisätietoja, katso <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: <code>datetimezone</code> ja <code>value</code> päivämääräosana, <code>12:00:00 AM</code> aikaosana ja paikallista aikavyöhykettä vastaava siirtymä.</li>        <li><code>datetime</code>: <code>datetimezone</code> ja <code>value</code> datetime-arvona sekä paikallista aikavyöhykettä vastaava siirtymä.</li>        <li><code>time</code>: <code>datetimezone</code> ja OLE-automaatiopäivämäärää <code>0</code> vastaava päivämäärä päivämääräosana, <code>value</code> aikaosana ja paikallista aikavyöhykettä vastaava siirtymä.</li>        <li><code>number</code>: <code>datetimezone</code> ja kohteen <code>value</code> ilmaisemaa OLE-automaatiopäivämäärää vastaava datetime-arvo sekä paikallista aikavyöhykettä vastaava siirtymä.</li>      </ul>Jos <code>value</code> on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1 
Muunna &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; &lt;code&gt;datetimezone&lt;/code&gt;-arvoksi.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
