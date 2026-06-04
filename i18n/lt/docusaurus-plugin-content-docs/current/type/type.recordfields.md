---
title: Type.RecordFields
---

# Type.RecordFields


Pateikiamas įrašas, aprašantis įrašo tipo laukus, o pateikiamo įrašų tipo kiekvienas laukas turi atitinkamą pavadinimą ir reikšmę.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Pateikiamas įrašo `type` laukus aprašantis įrašas. Kiekvienas pateikto įrašų tipo laukas turi atitinkamą pavadinimą ir reikšmę, kurie pateikti kaip įrašas `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Raskite įrašo `[ A = number, optional B = any]` pavadinimą ir reikšmę.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
