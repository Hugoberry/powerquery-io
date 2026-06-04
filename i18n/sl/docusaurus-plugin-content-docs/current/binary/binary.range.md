---
title: Binary.Range
---

# Binary.Range


Vrne podnabor dvojiške vrednosti, ki se začne pri odmiku.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Vrne podnabor dvojiške vrednosti, ki se začne pri odmiku `binary`. Izbirni parameter `offset` nastavi največjo dolžino v podnaboru.


## Examples

### Example #1
Vrne podnabor dvojiške vrednosti, ki se začne pri odmiku 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2
Vrne podnabor dolžine 2 od odmika 6 dvojiške vrednosti.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
