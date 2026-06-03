---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Retourneert de waarde van het opgegeven veld in een record of de standaardwaarde als het veld niet wordt gevonden.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Retourneert de waarde uit het opgegeven veld `field` in de record `record`. Als het veld niet wordt gevonden, wordt de optionele `defaultValue` geretourneerd.


## Examples

### Example #1
De waarde van veld Phone in de record zoeken of null retourneren als dat veld niet bestaat.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
De waarde van veld Phone in de record zoeken of de standaardwaarde retourneren als dat veld niet bestaat.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
