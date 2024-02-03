---
title: Text.Upper
---

# Text.Upper


## Description

Muuntaa kaikki merkit isoiksi kirjaimiksi.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Palauttaa kohteen <code>text</code> kaikkien merkkien isoiksi kirjaimiksi muuntamisen tuloksen. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Hanki tekstin &#34;aBcD&#34; isoja kirjaimia käyttävä versio.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
