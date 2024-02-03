---
title: Value.FromText
---

# Value.FromText


## Description

Luo vahvaa tyyppiä käyttävän arvon tekstiesityksestä.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Purkaa arvon koodauksen tekstiesityksestä <code>text</code> ja tulkitsee sen arvona, jolla on asianmukainen tyyppi    <code>Value.FromText</code> ottaa tekstiarvon ja palauttaa luvun, loogisen arvon, tyhjäarvon, datetime-arvon, kestoarvon tai tekstiarvon. Tyhjä tekstiarvo tulkitaan tyhjäarvoksi.    Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).



## Category
Text.Conversions from and to text
