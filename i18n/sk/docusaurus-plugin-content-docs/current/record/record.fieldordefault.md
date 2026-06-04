---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Vráti hodnotu zadaného poľa v zázname alebo predvolenú hodnotu, ak sa pole nenájde.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Vráti hodnotu zadaného poľa `field` v zázname `record`. Ak sa pole nenájde, vráti sa voliteľná hodnota `defaultValue`.


## Examples

### Example #1
Nájdite v zázname hodnotu poľa Phone alebo sa vráti hodnota null, ak pole neexistuje.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Nájdite v zázname hodnotu poľa Phone alebo sa vráti predvolená hodnota, ak pole neexistuje.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
