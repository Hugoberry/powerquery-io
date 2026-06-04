---
title: Time.From
---

# Time.From


Luo ajan annetusta arvosta.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Palauttaa `time`\-arvon annetusta kohteesta `value`. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US). Jos annettu `value` on `null`, `Time.From` palauttaa kohteen `null`. Jos annettu `value` on `time`, palautetaan `value`. Seuraavia tyyppejä olevat arvot voidaan muuntaa `time`\-arvoksi:

-   `text`: `time`\-arvo tekstiesityksestä. Jos haluat lisätietoja, katso `Time.FromText`.
-   `datetime`: kohteen `value` aikaosa.
-   `datetimezone`: kohdetta `value` vastaavan paikallisen datetime-arvon aikaosa.
-   `number`: `time`, joka vastaa kohteen `value` ilmaisemia kokonaisia päiviä ja päivien osia. Jos `value` on negatiivinen tai vähintään 1, palautetaan virhe.

Jos `value` on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1
Muunna `0.7575` `time`\-arvoksi.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Muunna `#datetime(1899, 12, 30, 06, 45, 12)` `time`\-arvoksi.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
