---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Returnerer værdien for det angivne felt i en post eller standardværdien, hvis feltet ikke blev fundet.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Returnerer værdien for det angivne felt `field` i posten `record`. Hvis feltet ikke blev fundet, returneres den valgfrie værdi `defaultValue`.


## Examples

### Example #1
Find værdien for feltet "Phone" i posten, eller returner null, hvis den ikke findes.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Find værdien for feltet "Phone" i posten, eller returner standardværdien, hvis den ikke findes.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
