---
title: Number.From
---

# Number.From


Iš nurodytos reikšmės sukuriamas skaičius.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Pateikiama `number` reikšmė iš nurodytos `value` reikšmės. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“). Jei nurodyta `value` reikšmė yra `null`, `Number.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `number`, pateikiama `value`. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į `number` reikšmę:

-   `text`: `number` reikšmė iš tekstinės pateikties. Apdorojami įprasto teksto formatai („15“, „3,423.10“, „5.0E-10“). Išsamios informacijos ieškokite `Number.FromText`.
-   `logical`: 1 kaip `true`, 0 kaip `false`.
-   `datetime`: dvigubo tikslumo slankiojo kablelio skaičius, kuriame yra OLE automatizavimo datos atitikmuo.
-   `datetimezone`: dvigubo tikslumo slankiojo kablelio skaičius, kuriame yra `value` vietos datos ir laiko OLE automatizavimo datos atitikmuo.
-   `date`: dvigubo tikslumo slankiojo kablelio skaičius, kuriame yra OLE automatizavimo datos atitikmuo.
-   `time`: išreiškiama dienų trupmenomis.
-   `duration`: išreiškiama visomis dienomis ir dienų trupmenomis.

Jei `value` yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1
Gaukite `"4"` `number` reikšmę.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Gaukite `#datetime(2020, 3, 20, 6, 0, 0)` `number` reikšmę.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Gaukite `12.3%` `number` reikšmę.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
