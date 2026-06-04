---
title: Logical.From
---

# Logical.From


Iš nurodytos reikšmės sukuriama loginė reikšmė.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Pateikiama `logical` reikšmė iš nurodytos `value` reikšmės. Jei nurodyta `value` reikšmė yra `null`, `Logical.From` pateikia `null`. Jei nurodyta `value` yra `logical`, pateikiama `value`. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į `logical` reikšmę:

-   `text`: `logical` reikšmė iš tekstinės reikšmės, `true` arba `false`. Išsamiau žr. `Logical.FromText`.
-   `number`: `false`, jei `value` lygi `0`, kitu atveju – `true`.

Jei `value` yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1
Konvertuokite `2` į `logical` reikšmę.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
