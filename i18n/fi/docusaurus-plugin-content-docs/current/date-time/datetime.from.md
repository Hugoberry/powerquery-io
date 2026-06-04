---
title: DateTime.From
---

# DateTime.From


Luo datetime-arvon annetusta arvosta.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Palauttaa `datetime`\-arvon annetusta kohteesta `value`. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US). Jos annettu `value` on `null`, `DateTime.From` palauttaa kohteen `null`. Jos annettu `value` on `datetime`, palautetaan `value`. Seuraavia tyyppejä olevat arvot voidaan muuntaa `datetime`\-arvoksi:

-   `text`: `datetime`\-arvo tekstiesityksestä. Jos haluat lisätietoja, katso `DateTime.FromText`.
-   `date`: `datetime` ja `value` päivämääräosana sekä `12:00:00 AM` aikaosana.
-   `datetimezone`: paikallinen `datetime`\-vastaavuus `value`.
-   `time`: `datetime` ja OLE-automaatiopäivämäärää `0` vastaava päivämäärä päivämääräosana sekä `value` aikaosana.
-   `number`: `datetime`\-vastine kohteen `value` ilmaisemasta OLE-automaatiopäivämäärästä.

Jos `value` on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1
Muunna `#time(06, 45, 12)` `datetime`\-arvoksi.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Muunna `#date(1975, 4, 4)` `datetime`\-arvoksi.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
