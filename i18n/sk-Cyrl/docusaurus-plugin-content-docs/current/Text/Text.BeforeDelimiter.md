---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Vráti časť <code>text</code> po zadanej hodnote <code>delimiter</code>.    Voliteľná číselná položka <code>index</code> určuje, ktorý výskyt hodnoty <code>delimiter</code> sa má vziať do úvahy.    Voliteľný zoznam <code>index</code> určuje, ktorý výskyt hodnoty <code>delimiter</code> sa má vziať do úvahy a či sa má indexovanie vykonať od začiatku alebo od konca vstupu.


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
