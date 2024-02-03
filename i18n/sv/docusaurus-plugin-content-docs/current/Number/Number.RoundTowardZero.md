---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Returnerar resultatet från avrundningen av positiva tal nedåt och negativa tal uppåt. Antalet siffror kan specificeras.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Returnerar resultatet från att <code>number</code> avrundas baserat på talets tecken. Den här funktionen avrundar positiva tal nedåt och negativa tal uppåt.    Om <code>digits</code> anges avrundas <code>number</code> till <code>digits</code> decimaltal.  


## Examples

### Example #1 
Avrundar talet -1,2 mot noll.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Avrundar talet 1,2 mot noll.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Avrunda talet -1 234 till två decimaler mot noll.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
