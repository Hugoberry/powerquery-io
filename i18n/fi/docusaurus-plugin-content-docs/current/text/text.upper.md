---
title: Text.Upper
---

# Text.Upper


Muuntaa kaikki merkit isoiksi kirjaimiksi.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Palauttaa kohteen `text` kaikkien merkkien isoiksi kirjaimiksi muuntamisen tuloksen. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1
Hanki tekstin "aBcD" isoja kirjaimia käyttävä versio.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
