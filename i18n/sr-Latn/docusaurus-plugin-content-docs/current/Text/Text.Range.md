---
title: Text.Range
---

# Text.Range


## Description

Vraća podnisku pronađenu kod pomaka.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Vraća podnisku iz teksta <code>text</code> pronađenu kod pomaka <code>offset</code>.    Može se navesti opcionalni parametar, <code>count</code>, da bi se navelo koliko znakova treba vratiti. Vraća grešku ako nema dovoljno znakova.


## Examples

### Example #1 
Pronalaženje podniske iz teksta „Hello World“ počev od indeksa 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Pronalaženje podniske iz teksta „Hello World Hello“ počev od indeksa 6 uz obuhvatanje 5 znakova.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
