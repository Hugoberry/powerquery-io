---
title: Type.RecordFields
---

# Type.RecordFields


Vraća zapis koji opisuje polja tipa zapisa, gde svako polje vraćenog tipa zapisa ima odgovarajuće ime i vrednost.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Vraća zapis koji opisuje polja zapisa `type`. Svako polje vraćenog tipa zapisa ima odgovarajuće ime i vrednost u obliku zapisa `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Pronađite ime i vrednost zapisa `[ A = number, optional B = any]`.
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
