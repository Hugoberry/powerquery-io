---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Zamenjuje vrednosti u okviru navedenog unosa.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Zamenjuje vrednost `old` u prvobitnom `value` vrednošću `new`. Ova funkcija zamene se može koristiti u `List.ReplaceValue` i `Table.ReplaceValue`.


## Examples

### Example #1
Zamena vrednosti 11 vrednošću 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
