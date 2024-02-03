---
title: Number.Log
---

# Number.Log


## Description

Vrne logaritem števila z določeno osnovo (privzeto &#34;e&#34;).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Vrne logaritem števila <code>number</code> z določeno osnovo <code>base</code>. Če osnova <code>base</code> ni določena, je privzeta vrednost "Number.E".    Če ima <code>number</code> ničelno vrednost, <code>Number.Log</code> vrne "null".


## Examples

### Example #1 
Poiščite logaritem števila 2 z osnovo 10.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Poiščite logaritem števila 2 z osnovo &#34;e&#34;.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
