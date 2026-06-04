---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Vráti časť `text` po zadanej hodnote `delimiter`. Voliteľná číselná položka `index` určuje, ktorý výskyt hodnoty `delimiter` sa má vziať do úvahy. Voliteľný zoznam `index` určuje, ktorý výskyt hodnoty `delimiter` sa má vziať do úvahy a či sa má indexovanie vykonať od začiatku alebo od konca vstupu.


## Examples

### Example #1
Získať časť 111-222-333 pred (prvým) spojovníkom.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Získať časť 111-222-333 pred druhým spojovníkom.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Získať časť 111-222-333 pred druhým spojovníkom od konca.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
