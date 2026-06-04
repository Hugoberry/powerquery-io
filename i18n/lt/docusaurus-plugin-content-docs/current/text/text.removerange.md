---
title: Text.RemoveRange
---

# Text.RemoveRange


Pašalinamas simbolių skaičius, pradedant nuo nurodyto poslinkio


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Pateikiama tekstinės reikšmės `text` kopija su pašalintais visais simboliais nuo padėties `offset`. Norint nurodyti šalintinų simbolių skaičių, galima naudoti pasirenkamą parametrą `count`. Numatytoji `count` reikšmė yra 1. Padėčių reikšmės prasideda nuo 0.


## Examples

### Example #1
Pašalinkite 1 simbolį iš tekstinės reikšmės „ABEFC“ 2 padėtyje.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Pašalinkite du simbolius iš tekstinės reikšmės „ABEFC“, pradėdami nuo 2 padėties.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
