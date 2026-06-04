---
title: Value.FromText
---

# Value.FromText


Sukuriama griežtai įvesta reikšmė iš tekstinės išraiškos.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Dekoduoja reikšmę iš tekstinės pateikties ir interpretuoja ją kaip tinkamo tipo reikšmę.

-   `text`: Tekstas, kurį reikia interpretuoti.
-   `culture`: (Pasirinktinai) Konkreti kultūra, naudojama tekstui interpretuoti (pvz., „en-US“).

Ši funkcija naudoja tekstinę reikšmę ir pateikia `skaičiaus`, `loginio`, `null`, `datos/laiko`, `trukmės` arba `teksto` tipo reikšmę. Tuščia teksto reikšmė interpretuojama kaip `null` reikšmė.


## Examples

### Example #1
Konvertuoti tekstą, rodantį numerį, į atitinkamą skaičiaus reikšmę.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Konvertuoti tekstą, rodantį procentinę dalį, į atitinkamą skaičiaus reikšmę.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Konvertuoti tekstą, rodantį Prancūzijos euro reikšmę, į atitinkamo skaičiaus reikšmę.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Konvertuoti tekstą, rodantį vokišką datą ir laiką, į atitinkamą datos ir laiko reikšmę.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
