---
title: Type.Is
---

# Type.Is


## Description

Nustato, ar pirmojo tipo reikšmė visada suderinama su antruoju tipu.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Nustato, ar <code>type1</code> reikšmė visada suderinama su <code>type2</code>.


## Examples

### Example #1 
Nustatykite, ar tipo numerio reikšmė visada gali būti traktuojama kaip bet kuris tipas.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Nustatykite, ar bet kokio tipo reikšmė visada gali būti traktuojama kaip tipo numeris.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
