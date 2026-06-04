---
title: Number.From
---

# Number.From


Luo luvun annetusta arvosta.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Palauttaa `number`\-arvon annetusta kohteesta `value`. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US). Jos annettu `value` on `null`, `Number.From` palauttaa kohteen `null`. Jos annettu `value` on `number`, palautetaan `value`. Seuraavia tyyppejä olevat arvot voidaan muuntaa `number`\-arvoksi:

-   `text`: `number`\-arvo tekstiesityksestä. Tavalliset tekstimuodot käsitellään ("15", "3,423.10", "5.0E-10"). Jos haluat lisätietoja, katso `Number.FromText`.
-   `logical`: 1 arvolle `true`, 0 arvolle `false`.
-   `datetime`: kaksoistarkkuuksinen liukuluku, joka sisältää OLE-automaation vastaavan päivämäärän.
-   `datetimezone`: kaksoistarkkuuksinen liukuluku, joka sisältää paikallista päivämäärää ja aikaa `value` vastaavan OLE-automaation päivämäärän.
-   `date`: kaksoistarkkuuksinen liukuluku, joka sisältää OLE-automaation vastaavan päivämäärän.
-   `time`: ilmaistaan päivien osina.
-   `duration`: ilmaistaan kokonaisina päivinä ja päivien osina.

Jos `value` on jokin muu tyyppi, palautetaan virhe.


## Examples

### Example #1
Hae kohteen `number` `"4"`\-arvo.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hae kohteen `number` `#datetime(2020, 3, 20, 6, 0, 0)`\-arvo.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Hanki kohteen `"12.3%"` `number`\-arvo.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
