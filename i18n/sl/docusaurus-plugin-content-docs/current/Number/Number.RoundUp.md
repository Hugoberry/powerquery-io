---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Vrne naslednje največje število. Določite lahko število števk.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Vrne rezultat zaokroževanja <code>number</code> navzgor na prejšnje največje celo število. Če ima <code>number</code> ničelno vrednost, funkcija vrne ničelno vrednost.    Če navedete <code>digits</code>, se <code>number</code> zaokroži na določeno število decimalnih števk.  


## Examples

### Example #1 
Zaokrožite 1,234 navzgor na celo število.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Zaokrožite 1,999 navzgor na celo število.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Zaokrožite 1,234 navzgor na dve decimalni mesti.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
