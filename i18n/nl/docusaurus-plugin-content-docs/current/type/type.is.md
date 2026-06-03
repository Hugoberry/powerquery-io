---
title: Type.Is
---

# Type.Is


Hiermee wordt bepaald of een waarde van het eerste type altijd compatibel is met het tweede type.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Bepaalt of een waarde van `type1` altijd compatibel is met `type2`. Parameter `type2` moet een primitieve waarde van het type (of nullable primitive) zijn. Anders is het gedrag van deze functie niet gedefinieerd en mag deze niet worden vertrouwd.


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
