---
title: DateTimeZone.From
---

# DateTimeZone.From


Luo datetimezone-arvon annetusta arvosta.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Luo `datetimezone` annetusta arvosta.

-   `value`: Arvo, jota käytetään `datetimezone`\-arvon luomiseen.
-   `culture`: (Valinnainen) maa-asetus, jota käytetään muunnettaessa arvoa (esimerkiksi en-US).

Seuraavien tyyppien arvot voidaan muuntaa `datetimezone`\-arvoksi:

-   `text`: Palauttaa `datetimezone`\-arvon tekstiesityksestä. Katso lisätietoja kohdasta `DateTimeZone.FromText`.
-   `date`: Palauttaa `datetimezone`\-arvon, jonka päivämääräkomponentti on `value`, kellonaikakomponentti on `12:00:00 AM` ja jonka siirtymä vastaa paikallista aikavyöhykettä.
-   `datetime`: Palauttaa `datetimezone`\-arvon, jonka päivämäärä on `value` ja jonka siirtymä vastaa paikallista aikavyöhykettä.
-   `datetimezone`: Palauttaa arvon `value`.
-   `time`: Palauttaa `datetimezone`\-arvon, jonka päivämääräkomponentti on `0`\-arvon OLE-automaatiopäivämäärän vastaava päivämäärä, jonka kellonaikakomponentti on `value` ja jonka siirtymä vastaa paikallista aikavyöhykettä. OLE-automaatiopäivämäärä koostuu liukuluvusta, jonka integraalikomponentti on päivien määrä ennen keskiyötä 30. joulukuuta 1899 tai sen jälkeen ja jonka murtolukuosa edustaa kyseisen päivän aikaa jaettuna 24:llä. Esimerkiksi keskiyö, 31. joulukuuta 1899 edustaa arvoa 1,0; 6.00, 1. tammikuuta 1900 edustaa arvoa 2,25; keskiyön 29. joulukuuta 1899 edustaa arvoa -1,0; ja klo 6.00, 29.12.1899 edustaa arvoa -1,25. Perusarvo on keskiyö 30. joulukuuta 1899. Vähimmäisarvo on keskiyö, 1. tammikuuta 0100. Enimmäisarvo on 31.12.9999 viimeinen hetki.
-   `number`: Palauttaa `datetimezone`\-arvon, joka vastaa kohteen `value` ilmaisemaa OLE-automaatiopäivämäärän päivämääräekvivalenttia ja jonka siirtymä vastaa paikallista aikavyöhykettä.
-   `null`: Palauttaa `null`\-arvon.

Jos `value` on jotakin muuta tyyppiä, palautetaan virhe.  
  
Paikallista aikavyöhykettä vastaavan siirtymän arvo on erilainen, kun tätä toimintoa suoritetaan paikallisesti verrattuna sen suorittamiseen online-tilassa. Kun suoritus tapahtuu paikallisesti, palautetaan paikallinen aikavyöhyke. Kun suoritus tapahtuu online-tilassa, palautetaan UTC-aikavyöhyke (+00:00).


## Examples

### Example #1
Muunna päivämäärän, kellonajan ja aikavyöhykkeen tekstiesitys `datetimezone`\-arvoksi.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Muunna Brasilian portugalin päivämäärän, kellonajan ja aikavyöhykkeen tekstiesitys `datetimezone`\-arvoksi.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Muunna luku, joka edustaa 1. tammikuuta 2025 kello 12.00, `datetimezone`\-arvoksi. Tuloksen aikavyöhyke määräytyy sen mukaan, suoritetaanko esimerkki paikallisesti vai online-tilassa.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
