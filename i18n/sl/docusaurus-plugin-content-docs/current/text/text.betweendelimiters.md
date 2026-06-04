---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Vrne del števila `text` med navedenima `startDelimiter` in `endDelimiter`. Izbirna številska vrednost `startIndex` označuje, katero ponovitev števila `startDelimiter` je treba upoštevati. Izbirni seznam `startIndex` označuje, katero ponovitev števila `startDelimiter` je treba upoštevati, in ali je treba indeksiranje izvesti od začetka ali konca vnosa. `endIndex` je podobno, le da je indeksiranje izvedeno relativno glede na `startIndex`.


## Examples

### Example #1
Pridobite del števila"111 (222) 333 (444)"med (prvim) oklepajem in (prvim) zaklepajem, ki mu sledi.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Pridobite del števila"111 (222) 333 (444)"med drugim oklepajem od konca in prvim zaklepajem, ki mu sledi.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Pridobite del števila"111 (222) 333 (444)"med drugim oklepajem od konca in drugim zaklepajem, ki mu sledi.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
