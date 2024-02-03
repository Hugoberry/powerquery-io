---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Details

Vráti časť <code>text</code> medzi zadanými hodnotami <code>startDelimiter</code> a <code>endDelimiter</code>.    Voliteľná číselná hodnota <code>startIndex</code> určuje, ktorá hodnota <code>startDelimiter</code> sa má vziať do úvahy.    Voliteľný zoznam <code>startIndex</code> určuje, ktorý výskyt hodnoty <code>startDelimiter</code> sa má vziať do úvahy a či sa má indexovanie vykonať od začiatku alebo od konca vstupu.    <code>endIndex</code> je podobné, ale indexovanie je relatívne vzhľadom na <code>startIndex</code>.


## Examples

### Example #1 
Získať časť 111 (222) 333 (444) medzi (prvou) ľavou zátvorkou a (prvou) pravou zátvorkou, ktorá za ňou nasleduje.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Získať časť 111 (222) 333 (444) medzi druhou ľavou zátvorkou a prvou pravou zátvorkou, ktorá za ňou nasleduje.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Získať časť 111 (222) 333 (444) medzi druhou ľavou zátvorkou od konca a druhou pravou zátvorkou, ktorá za ňou nasleduje.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
