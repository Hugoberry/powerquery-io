---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


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


## Remarks

Vráti časť `text` medzi zadanými hodnotami `startDelimiter` a `endDelimiter`. Voliteľná číselná hodnota `startIndex` určuje, ktorá hodnota `startDelimiter` sa má vziať do úvahy. Voliteľný zoznam `startIndex` určuje, ktorý výskyt hodnoty `startDelimiter` sa má vziať do úvahy a či sa má indexovanie vykonať od začiatku alebo od konca vstupu. `endIndex` je podobné, ale indexovanie je relatívne vzhľadom na `startIndex`.


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
