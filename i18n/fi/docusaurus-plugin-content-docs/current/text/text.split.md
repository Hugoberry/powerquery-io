---
title: Text.Split
---

# Text.Split


Jakaa tekstin tekstiarvoluetteloksi määritetyn erottimen perusteella.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Palauttaa tekstiarvoluettelon, joka on tuloksena tekstiarvon jakamisesta osiin määritetyn erottimen perusteella.

-   `text`: Jaettava tekstiarvo.
-   `separator`: Tekstin jakamiseen käytettävä erotin. Erotin voi olla joko yksittäinen merkki tai merkkijono. Jos käytetään merkkijonoa, teksti jaetaan vain niistä kohdista, joissa tarkka merkkijono esiintyy.


## Examples

### Example #1
Luo luettelo merkillä "|" erotetusta tekstiarvosta "Name|Address|PhoneNumber".
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Luo luettelo tekstiarvosta käyttäen merkkijonoa.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
