---
title: Value.Is
---

# Value.Is


## Description

Määrittää, onko arvo yhteensopiva määritetyn tyypin kanssa.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Määrittää, onko arvo yhteensopiva määritetyn tyypin kanssa. Tämä vastaa M:n is-operaattoria lukuun ottamatta sitä, että se voi hyväksyä tunnistetyyppiviittauksia, kuten Number.Type.


## Examples

### Example #1 
Vertaa kahta tapaa määrittää, onko luku yhteensopiva tyyppiluvun kanssa.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
