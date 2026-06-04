---
title: Time.From
---

# Time.From


Iš nurodytos reikšmės sukuriamas laikas.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Pateikiama `time` reikšmė iš nurodytos `value` reikšmės. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“). Jei nurodyta `value` reikšmė yra `null`, `Time.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `time`, pateikiama `value`. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į `time` reikšmę:

-   `text`: `time` reikšmė iš tekstinės pateikties. Išsamiau žr. `Time.FromText`.
-   `datetime`: `value` laiko komponentas.
-   `datetimezone`: vietinio datos ir laiko atitikmens `value` laiko komponentas.
-   `number`: `time` reikšmė, atitinkanti dienų trupmenų, išreikštų `value`, skaičių. Jei `value` yra neigiamas, didesnis arba lygus 1 skaičius, pateikiama klaida.

Jei `value` yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1
Konvertuokite `0.7575` į `time` reikšmę.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Konvertuokite `#datetime(1899, 12, 30, 06, 45, 12)` į `time` reikšmę.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
