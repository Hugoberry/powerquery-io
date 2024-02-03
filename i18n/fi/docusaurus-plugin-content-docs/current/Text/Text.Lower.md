---
title: Text.Lower
---

# Text.Lower


## Description

Muuntaa kaikki merkit pieniksi kirjaimiksi.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Palauttaa kohteen <code>text</code> kaikkien merkkien pieniksi kirjaimiksi muuntamisen tuloksen. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Hanki tekstin &#34;AbCd&#34; pieniä kirjaimia käyttävä versio.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
