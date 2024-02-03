---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Vráti hodnotu zadaného poľa v zázname alebo predvolenú hodnotu, ak sa pole nenájde.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Vráti hodnotu zadaného poľa <code>field</code> v zázname <code>record</code>. Ak sa pole nenájde, vráti sa voliteľná hodnota <code>defaultValue</code>.


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
