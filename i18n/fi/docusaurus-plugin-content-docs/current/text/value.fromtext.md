---
title: Value.FromText
---

# Value.FromText


Luo vahvaa tyyppiä käyttävän arvon tekstiesityksestä.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Purkaa arvon tekstiesityksestä ja tulkitsee sen arvoksi, jolla on asianmukainen tyyppi.

-   `text`: Tulkittava teksti.
-   `culture`: (Valinnainen) Tietty maa-asetus, jota käytetään tekstin tulkitsemiseen (esimerkiksi en-US).

Tämä funktio ottaa tekstiarvon ja palauttaa arvon, jonka tyyppi on `numero`, `looginen`, `null`, `päivämäärä`, `kesto` tai `teksti`. Tyhjää tekstiarvoa tulkitaan `null`arvoksi.


## Examples

### Example #1
Muunna lukua edustava teksti vastaavaksi lukuarvoksi.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Muunna prosenttiosuutta edustava teksti vastaavaksi lukuarvoksi.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Muunna ranskan euroarvoa edustava teksti sitä vastaavaksi lukuarvoksi.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Muunna saksalaista päivämäärää ja aikaa edustava teksti vastaavaksi päivämäärä- ja aika-arvoksi.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
