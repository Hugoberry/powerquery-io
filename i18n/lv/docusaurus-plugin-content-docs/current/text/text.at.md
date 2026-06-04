---
title: Text.At
---

# Text.At


Tiek atgriezta rakstzīme norādītajā pozīcijā.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Tiek atgriezta rakstzīme teksta vērtībā `text` pozīcijā `index`. Pirmā rakstzīme tekstā ir pozīcijā 0.


## Examples

### Example #1
Atrodiet rakstzīmi 4. pozīcijā virknē Hello, World.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
