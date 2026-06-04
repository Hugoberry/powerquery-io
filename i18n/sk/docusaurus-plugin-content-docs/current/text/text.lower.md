---
title: Text.Lower
---

# Text.Lower


Skonvertuje všetky znaky na malé písmená.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Vráti výsledok konverzie všetkých znakov v `text` na malé písmená. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získajte verziu textu "AbCd" v malých písmenách.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
