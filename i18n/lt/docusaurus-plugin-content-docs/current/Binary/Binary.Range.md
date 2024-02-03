---
title: Binary.Range
---

# Binary.Range


## Description

Pateikiamas dvejetainės reikšmės poaibis pradedant nuo poslinkio.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Pateikiamas dvejetainės reikšmės poaibis pradedant nuo poslinkio <code>binary</code>. Pasirenkamas parametras, <code>offset</code>, nustato maksimalų poaibio ilgį.


## Examples

### Example #1 
Pateikiamas dvejetainės reikšmės poaibis pradedant 6 poslinkio.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Pateikiamas 2 ilgio poaibis iš dvejetainės reikšmės 6 poslinkio.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
