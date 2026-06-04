---
title: Text.Lower
---

# Text.Lower


Muuntaa kaikki merkit pieniksi kirjaimiksi.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Palauttaa kohteen `text` kaikkien merkkien pieniksi kirjaimiksi muuntamisen tuloksen. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1
Hanki tekstin "AbCd" pieniä kirjaimia käyttävä versio.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
