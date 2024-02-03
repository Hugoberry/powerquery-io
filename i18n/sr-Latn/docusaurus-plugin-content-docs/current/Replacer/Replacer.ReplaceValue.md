---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Zamenjuje vrednosti u okviru navedenog unosa.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Zamenjuje vrednost <code>old</code> u prvobitnom <code>value</code> vrednošću <code>new</code>. Ova funkcija zamene se može koristiti u <code>List.ReplaceValue</code> i <code>Table.ReplaceValue</code>.


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
