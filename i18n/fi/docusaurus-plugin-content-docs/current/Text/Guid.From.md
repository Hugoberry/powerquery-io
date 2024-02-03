---
title: Guid.From
---

# Guid.From


## Description

Palauttaa GUID-arvon annetusta arvosta.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Palauttaa <code>Guid.Type</code>-arvon annetusta kohteesta <code>value</code>. Jos annettu <code>value</code> on <code>null</code>-tyhjäarvo, <code>Guid.From</code> palauttaa <code>null</code>-tyhjäarvon.  Suoritetaan tarkistus, jotta voidaan selvittää, onko annettu <code>value</code> hyväksyttävässä muodossa. Hyväksyttävät muodot on annettu esimerkeissä.


## Examples

### Example #1 
GUID-tunnus voidaan antaa 32 yhtenäisenä heksadesimaalimerkkinä.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
GUID-tunnus voidaan antaa 32 heksadesimaalimerkkinä, jotka on eroteltu yhdysmerkkien avulla lohkoihin: 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
GUID-tunnus voidaan antaa 32 heksadesimaalimerkkinä, jotka on eroteltu yhdysmerkeillä ja sisällytetty aaltosulkeisiin.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
GUID-tunnus voidaan antaa 32 heksadesimaalimerkkinä, jotka on eroteltu yhdysmerkeillä ja sisällytetty sulkeisiin.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
