---
title: Type.RecordFields
---

# Type.RecordFields


Restituisce un record che descrive i campi di un tipo di record in cui ogni campo del tipo di record restituito ha un nome e un valore corrispondente.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Restituisce un record che descrive i campi di un record `type`. Ogni campo del tipo di record restituito ha un nome e un valore corrispondente, nel formato di un record `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Trovare il nome e il valore del record `[ A = number, optional B = any]`.
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
