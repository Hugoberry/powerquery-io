---
title: Number.ToText
---

# Number.ToText


## Description

Muuntaa annetun luvun tekstiksi.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Muuntaa numeerisen arvon <code>number</code> tekstiarvoksi kohteessa<code>format</code> määritetyn muodon mukaan.<br />    <br />    Muoto on tekstiarvo, joka ilmaisee, miten luku tulee muuntaa. Jos haluat lisätietoja tuetuista muotoarvoista, siirry osoitteisiin https://go.microsoft.com/fwlink/?linkid=2241210 ja https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US) ohjaamaan kohteen <code>format</code> kulttuurisidonnaista toimintaa.


## Examples

### Example #1 
Muunna luku tekstiksi määrittämättä muotoa.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Muunna luku eksponenttimuotoon.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Muunna luku prosenttimuotoon, jossa on vain yksi desimaali.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
