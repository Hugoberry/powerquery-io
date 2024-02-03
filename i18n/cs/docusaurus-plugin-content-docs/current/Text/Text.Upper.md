---
title: Text.Upper
---

# Text.Upper


## Description

Převede všechny znaky z malých písmen na velká.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Vrátí výsledek převodu všech znaků v <code>text</code> na velká písmena. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Vrátí řetězec aBcD převedený na velká písmena.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
