---
title: Number.Log
---

# Number.Log


## Description

Mengembalikan logaritma bagi nombor kepada asas yang tentukan (e lalai).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Mengembalikan logaritma bagi nombor, <code>number</code>, kepada asas <code>base</code> yang ditentukan. Jika <code>base</code> tidak ditentukan, nilai lalai ialah Number.E.     Jika <code>number</code> ialah nol <code>Number.Ln</code> mengembalikan nol.


## Examples

### Example #1 
Dapatkan logaritma asas 10 bagi 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Dapatkan logaritma asas e bagi 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
