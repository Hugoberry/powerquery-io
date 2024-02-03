---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Pateikiamas teigiamų skaičių apvalinimo į mažesniąją pusę ir neigiamų skaičių apvalinimo į didesniąją pusę rezultatas. Galima nurodyti skaitmenų skaičių.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Pateikiamas <code>number</code> apvalinimo rezultatas, atsižvelgiant į skaičiaus ženklą. Ši funkcija suapvalins teigiamus skaičius į mažesniąją pusę ir neigiamus skaičius į didesniąją pusę.    Jei nurodyta <code>digits</code>, <code>number</code> suapvalinama iki <code>digits</code> dešimtainių skaitmenų skaičiaus.  


## Examples

### Example #1 
Apvalinkite skaičių -1,2 link nulio.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Apvalinkite skaičių 1,2 link nulio.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Suapvalinkite -1,234 iki dviejų dešimtainių dalių nulio link.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
