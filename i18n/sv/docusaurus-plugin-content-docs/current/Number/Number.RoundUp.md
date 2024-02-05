---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Returnerar nästa största heltal. Antalet siffror kan specificeras.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Returnerar resultatet av avrundning <code>number</code> upp till nästa högsta heltal. Om <code>number</code> är null returnerar den här funktionen null. Om <code>digits</code> anges avrundas <code>number</code> till det angivna antalet decimaler.


## Examples

### Example #1 
Avrunda 1,234 uppåt till närmaste heltal.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Avrunda 1,999 uppåt till närmaste heltal.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Avrunda 1 234 uppåt till två decimaler.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
