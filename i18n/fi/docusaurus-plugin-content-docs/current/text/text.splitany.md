---
title: Text.SplitAny
---

# Text.SplitAny


Palauttaa tekstiarvoluettelon, joka on jaettu osiin jokaisen erottimen merkin kohdalta.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Palauttaa tekstiarvoluettelon, joka on tuloksena tekstiarvon jakamisesta osiin määritetyn erottimen jokaisen merkin perusteella.

-   `text`: Jaettava tekstiarvo.
-   `separators`: Tekstin jakamiseen käytettävät erotinmerkit.


## Examples

### Example #1
Luo luettelo annetusta tekstistä käyttäen määritettyjä erottimia.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
