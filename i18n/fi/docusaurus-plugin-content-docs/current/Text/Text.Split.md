---
title: Text.Split
---

# Text.Split


## Description

Jakaa tekstin tekstiarvoluetteloksi määritetyn erottimen perusteella.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Palauttaa tekstiarvoluettelon, joka on tuloksena tekstiarvon <code>text</code> jakamisesta osiin määritetyn erottimen <code>separator</code> perusteella.


## Examples

### Example #1 
Luo luettelo merkillä &#34;|&#34; erotetusta tekstiarvosta &#34;Name|Address|PhoneNumber&#34;.
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




## Category
Text.Transformations
