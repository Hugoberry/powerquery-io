---
title: Text.Lower
---

# Text.Lower


Převede všechny znaky z velkých písmen na malá.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Vrátí výsledek převodu všech znaků v `text` na malá písmena. Volitelně je možné zadat i `culture` (např. en-US).


## Examples

### Example #1
Vrátí řetězec „AbCd“ převedený na malá písmena.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
