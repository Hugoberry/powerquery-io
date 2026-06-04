---
title: Duration.From
---

# Duration.From


Vytvorí trvanie z danej hodnoty.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Vráti hodnotu trvania z danej hodnoty.

-   `value`: Hodnota, z ktorej je odvodené trvanie. Ak je daná hodnota `value` `null`, táto funkcia vráti hodnotu `null`. Ak je daná hodnota `value` `duration`, vráti sa hodnota `value`. Hodnoty nasledujúcich typov možno skonvertovať na hodnotu `duration`:
    -   `text`: Hodnota `duration` z textových formátov uplynutého času (d.h:m:s). Podrobnosti nájdete v `Duration.FromText`.
    -   `number`: Hodnota `duration` ekvivalentná k počte celých a zlomkových dní vyjadrených hodnotou `value`.

Ak je `value` akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1
Konvertujte hodnotu `2.525` na hodnotu `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Konvertujte textovú hodnotu `"2.05:55:20.34567"` na hodnotu `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
