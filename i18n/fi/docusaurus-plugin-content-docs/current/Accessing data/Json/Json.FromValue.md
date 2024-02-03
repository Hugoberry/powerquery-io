---
title: Json.FromValue
---

# Json.FromValue


## Description

Tuottaa JSON-esityksen annetusta arvosta.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Tuottaa JSON-esityksen annetusta arvosta <code>value</code> käyttäen kohteen <code>encoding</code> määrittämää tekstin koodausta. Jos <code>encoding</code> jätetään pois, käytetään UTF8:aa. Arvot esitetään seuraavasti:<br /> <ul>        <li>Tyhjäarvot, teksti ja loogiset arvot esitetään vastaavina JSON-tyyppeinä</li>        <li>Luvut esitetään lukuina JSON-esityksessä lukuun ottamatta sitä, että <code>#infinity</code>, <code>-#infinity</code> and <code>#nan</code> muunnetaan tyhjäarvoiksi</li>        <li>Luettelot esitetään JSON-matriiseina</li>        <li>Tietueet esitetään JSON-objekteina</li>        <li>Taulukot esitetään objektien matriiseina</li>        <li>Päivämäärät, ajat, datetime-kohteet, datetimezone-kohteet ja kestot estetään ISO-8601-tekstinä</li>        <li>Binaariarvot esitetään base-64-koodattuna tekstinä</li>        <li>Tyypit ja funktiot antavat tulokseksi virheen</li> </ul>    


## Examples

### Example #1 
Muunna monimutkainen arvo JSON-muotoon.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
