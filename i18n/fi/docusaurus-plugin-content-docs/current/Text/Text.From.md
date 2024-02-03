---
title: Text.From
---

# Text.From


## Description

Luo tekstiarvon annetusta arvosta.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Palauttaa kohteen <code>value</code> tekstiesityksen. <code>value</code> voi olla <code>number</code>-, <code>date</code>-, <code>time</code>-, <code>datetime</code>-, <code>datetimezone</code>-, <code>logical</code>-, <code>duration</code>- tai <code>binary</code>-arvo.    Jos annettu arvo on tyhjäarvo, <code>Text.From</code> palauttaa tyhjäarvon. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Luo tekstiarvo luvusta 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
