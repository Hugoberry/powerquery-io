---
title: Json.FromValue
---

# Json.FromValue


Tuottaa JSON-esityksen annetusta arvosta.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Tuottaa JSON-esityksen annetusta arvosta `value` käyttäen kohteen `encoding` määrittämää tekstin koodausta. Jos `encoding` jätetään pois, käytetään UTF8:aa. Arvot esitetään seuraavasti:

-   Tyhjäarvot, teksti ja loogiset arvot esitetään vastaavina JSON-tyyppeinä
-   Luvut esitetään lukuina JSON-esityksessä lukuun ottamatta sitä, että `#infinity`, `-#infinity` and `#nan` muunnetaan tyhjäarvoiksi
-   Luettelot esitetään JSON-matriiseina
-   Tietueet esitetään JSON-objekteina
-   Taulukot esitetään objektien matriiseina
-   Päivämäärät, ajat, datetime-kohteet, datetimezone-kohteet ja kestot estetään ISO-8601-tekstinä
-   Binaariarvot esitetään base-64-koodattuna tekstinä
-   Tyypit ja funktiot antavat tulokseksi virheen


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
