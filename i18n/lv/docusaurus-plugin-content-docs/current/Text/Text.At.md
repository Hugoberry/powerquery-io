---
title: Text.At
---

# Text.At


## Description

Tiek atgriezta rakstzīme norādītajā pozīcijā.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Tiek atgriezta rakstzīme teksta vērtībā <code>text</code> pozīcijā <code>index</code>. Pirmā rakstzīme tekstā ir pozīcijā 0.


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
