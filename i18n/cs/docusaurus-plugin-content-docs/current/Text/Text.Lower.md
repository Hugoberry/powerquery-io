---
title: Text.Lower
---

# Text.Lower


## Description

Převede všechny znaky z velkých písmen na malá.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Vrátí výsledek převodu všech znaků v <code>text</code> na malá písmena. Volitelně je možné zadat i <code>culture</code> (např. en-US).


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
