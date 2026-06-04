---
title: List.Average
---

# List.Average


Pateikiamas reikšmių vidurkis. Veikia su skaičiaus, datos, datos ir laiko, datos, laiko ir juostos bei trukmės reikšmėmis.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Pateikiama vidutinė sąrašo elementų reikšmė, `list`. Rezultatas pateikiamas tame pačiame duomenų tipe kaip sąrašo reikšmės. Veikia tik su skaičiaus, datos, laiko, datos ir laiko, datos, laiko ir juostos bei trukmės reikšmėmis. Jei sąrašas yra tuščias, pateikiama neapibrėžta reikšmė.


## Examples

### Example #1
Rasti skaičių sąrašo vidurkį, `{3, 4, 6}`.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2
Rasti datų reikšmių vidurkį: 2011 m. sausio 1 d., 2011 m. sausio 2 d. ir 2011 m. sausio 3 d.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
