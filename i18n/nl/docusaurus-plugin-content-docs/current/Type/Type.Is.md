---
title: Type.Is
---

# Type.Is


## Description

Hiermee wordt bepaald of een waarde van het eerste type altijd compatibel is met het tweede type.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Hiermee wordt bepaald of de waarde van <code>type1</code> altijd compatibel is met <code>type2</code>.


## Examples

### Example #1 
Hiermee wordt bepaald of een waarde van het type Getal altijd ook als type kan worden behandeld.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Hiermee wordt bepaald of een waarde van het type Altijd ook als type Getal kan worden behandeld.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
