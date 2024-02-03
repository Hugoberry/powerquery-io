---
title: Binary.Range
---

# Binary.Range


## Description

Vráti podmnožinu binárnej hodnoty začínajúcu posunom.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Vráti podmnožinu binárnej hodnoty začínajúcu posunom <code>binary</code>. Voliteľný parameter <code>offset</code> určuje maximálnu dĺžku podmnožiny.


## Examples

### Example #1 
Vráti podmnožinu binárnej hodnoty začínajúcu posunom 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Vráti podmnožinu s dĺžkou 2 z posunu 6 binárnej hodnoty.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
