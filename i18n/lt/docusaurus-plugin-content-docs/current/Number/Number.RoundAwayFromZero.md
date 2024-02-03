---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Pateikiamas teigiamų skaičių apvalinimo į didesniąją pusę ir neigiamų skaičių apvalinimo į mažesniąją pusę rezultatas. Gali būti nurodytas skaitmenų skaičius.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Pateikiamas <code>number</code> apvalinimo rezultatas, atsižvelgiant į skaičiaus ženklą. Ši funkcija suapvalins teigiamus skaičius į didesniąją pusę ir neigiamus skaičius į mažesniąją pusę.    Jei nurodyta <code>digits</code>, <code>number</code> suapvalinama iki <code>digits</code> dešimtainių skaitmenų skaičiaus.  


## Examples

### Example #1 
Apvalinkite skaičių -1,2 tolyn nuo nulio.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Apvalinkite skaičių 1,2 tolyn nuo nulio.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Suapvalinkite -1,234 dviejų dešimtųjų dalių tikslumu nuo nulio.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
