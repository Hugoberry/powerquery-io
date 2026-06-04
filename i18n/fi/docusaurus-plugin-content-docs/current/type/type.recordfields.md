---
title: Type.RecordFields
---

# Type.RecordFields


Palauttaa tietueen, joka kuvaa tietuetyypin kentät niin, että palautetun tietuetyypin kullakin kentällä on vastaava nimi ja arvo.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Palauttaa tietueen, joka kuvaa tietueen `type` kentät. Jokaisella palautetun tietuetyypin kentällä on vastaava nimi ja arvo muodossa `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Etsi tietueen `[ A = number, optional B = any]` nimi ja arvo.
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
