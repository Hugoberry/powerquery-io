---
title: Number.Log
---

# Number.Log


## Description

Tiek atgriezts skaitļa logaritms ar norādīto bāzi (noklusējuma bāze ir konstante e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Atgriež skaitļa <code>number</code> logaritmu norādītajai bāzei <code>base</code>. Ja <code>base</code> vērtība nav norādīta, tiek izmantota noklusējuma vērtība Number.E.    Ja <code>number</code> vērtība ir Null, funkcija <code>Number.Log</code> atgriež vērtību Null.


## Examples

### Example #1 
Iegūstiet skaitļa 2 logaritmu ar bāzi 10.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Iegūstiet skaitļa 2 logaritmu ar bāzi e.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
