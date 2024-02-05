---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Returnerar resultatet från avrundningen av positiva tal uppåt och negativa tal nedåt. Antalet siffror kan specificeras.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Returnerar resultatet från att <code>number</code> avrundas baserat på talets tecken. Den här funktionen avrundar positiva tal uppåt och negativa tal nedåt.    Om <code>digits</code> anges avrundas <code>number</code> till <code>digits</code> decimaltal.  


## Examples

### Example #1 
Avrundar talet -1,2 bort från noll.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Avrundar talet 1,2 bort från noll.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Avrunda talet -1 234 till två decimaler från noll.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
