---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Vráti časť `text` po zadanej hodnote `delimiter`. Voliteľná numerická položka `index` určuje, ktorý výskyt hodnoty `delimiter` sa má vziať do úvahy. Voliteľný zoznam `index` určuje, ktorý výskyt hodnoty `delimiter` sa má vziať do úvahy a či sa má indexovanie vykonať od začiatku alebo od konca vstupu.


## Examples

### Example #1
Získať časť „111-222-333“ po (prvom) spojovníku.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Získať časť „111-222-333“ po druhom spojovníku.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Získať časť „111-222-333“ po druhom spojovníku od konca.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
