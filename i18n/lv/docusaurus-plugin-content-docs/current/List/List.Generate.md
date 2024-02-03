---
title: List.Generate
---

# List.Generate


## Description

Tiek ģenerēts vērtību saraksts.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Tiek ģenerēts vērtību saraksts, izmantojot norādītās funkcijas. Funkcija <code>initial</code> ģenerē sākuma kandidāta vērtību, kas pēc tam tiek pārbaudīta pret <code>condition</code>.    Ja kandidāta vērtība ir apstiprināta, tad tā tiek atgriezta kā daļa no iegūtā saraksta, un nākamā kandidāta vērtība tiek ģenerēta, nododot jaunapstiprināto vērtību <code>next</code>.    Kad kandidāta vērtība neatbilst <code>condition</code>, saraksta ģenerēšanas process tiek apturēts.    Lai pārveidotu vienumus iegūtajā sarakstā, var norādīt arī neobligātu parametru, <code>selector</code>.


## Examples

### Example #1 
Izveidojiet sarakstu, sākot ar desmit, atkārtoti samazinot par vienu un nodrošinot, ka katrs vienums ir lielāks par nulli.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Ģenerējiet sarakstu ar ierakstiem, kas satur x un y, kur x ir vērtība un y ir saraksts. Vērtībai x ir jābūt mazākai par 10 un jānorāda vienumu skaitu sarakstā y. Pēc saraksta ģenerēšanas tiek atgrieztas tikai x vērtības.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
