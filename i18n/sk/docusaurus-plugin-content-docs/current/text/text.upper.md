---
title: Text.Upper
---

# Text.Upper


Skonvertuje všetky znaky na veľké písmená.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Vráti výsledok konverzie všetkých znakov v `text` na veľké písmená. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získajte verziu textu "aBcD" vo veľkých písmenách.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
