---
title: DateTime.From
---

# DateTime.From


Iš nurodytos reikšmės sukuriama data ir laikas.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Pateikiama `datetime` reikšmė iš nurodytos `value` reikšmės. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“). Jei nurodyta `value` reikšmė yra `null`, `DateTime.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `datetime`, pateikiama `value`. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į `datetime` reikšmę:

-   `text`: `datetime` reikšmė iš tekstinės pateikties. Išsamiau žr. `DateTime.FromText`.
-   `date`: `datetime` su `value` kaip datos komponentu ir `12:00:00 AM` kaip laiko komponentu.
-   `datetimezone`: vietinis `datetime` `value` atitikmuo.
-   `time`: `datetime` su `0` OLE automatizavimo datos atitikmeniu kaip datos komponentu ir `value` kaip laiko komponentu.
-   `number`: `datetime` atitikmuo, kurį OLE automatizavimo data išreiškia `value`.

Jei `value` yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1
Konvertuokite `#time(06, 45, 12)` į `datetime` reikšmę.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Konvertuokite `#date(1975, 4, 4)` į `datetime` reikšmę.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
