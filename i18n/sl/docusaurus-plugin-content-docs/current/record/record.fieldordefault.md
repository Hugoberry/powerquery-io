---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Vrne vrednost navedenega polja v zapisu ali privzeto vrednost, če polja ni mogoče najti.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Vrne vrednost navedenega polja `field` v zapisu `record`. Če polja ni mogoče najti, je vrnjena izbirna vrednost `defaultValue`.


## Examples

### Example #1
Poiščite vrednost polja"Telefon"v zapisu ali vrnite ničelno vrednost, če ne obstaja.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Poiščite vrednost polja"Telefon"v zapisu ali vrnite privzeto vrednost, če ne obstaja.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
