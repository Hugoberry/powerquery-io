---
title: Duration.From
---

# Duration.From


Iš nurodytos reikšmės sukuriama trukmė.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Pateikia nurodytos reikšmės trukmės reikšmę.

-   `value`: reikšmė, iš kurios išvesta trukmė. Jei nurodyta `value` yra `null`, ši funkcija pateikia `null`. Jei nurodyta `value` yra `duration`, grąžinama `value`. Į `duration` reikšmę galima konvertuoti reikšmes, kurių tipai yra:
    -   `text`: `duration` reikšmė iš tekstinių praėjusio laiko formų (d.h:m:s). Daugiau informacijos žr. `Duration.FromText`.
    -   `number`: `duration`, atitinkanti sveikų ir trupmeninių dienų skaičių, išreikštą `value`.

Jei `value` yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1
Konvertuokite `2.525` į `duration` reikšmę.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Konvertuokite `"2.05:55:20.34567"` į `trukmės` reikšmę.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
