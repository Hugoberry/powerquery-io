---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Pateikiama nurodyto lauko įraše reikšmė arba numatytoji reikšmė, jei laukas nerastas.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Pateikiama nurodyto lauko `field` įraše `record` reikšmė. Jei laukas nerastas, pateikiama pasirenkama `defaultValue`.


## Examples

### Example #1
Raskite lauko „Phone“ reikšmę įraše arba pateikiama NULL, jei jos nėra.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Raskite lauko „Phone“ reikšmę įraše arba pateikiama numatytoji reikšmė, jei jos nėra.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
