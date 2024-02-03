---
title: Binary.Range
---

# Binary.Range


## Description

Returnează un subset al valorii binare începând de la un decalaj.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Returnează un subset al valorii binare, începând de la decalajul <code>binary</code>. Un parametru opţional, <code>offset</code>, setează lungimea maximă a subsetului.


## Examples

### Example #1 
Returnează un subset al valorii binare începând de la decalajul 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Returnează un subset de lungime 2 de la decalajul 6 al valorii binare.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
