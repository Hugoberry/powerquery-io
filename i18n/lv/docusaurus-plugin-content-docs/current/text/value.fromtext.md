---
title: Value.FromText
---

# Value.FromText


Tiek izveidota stingri tipēta vērtība no teksta atveidojuma.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Dekodē vērtību no teksta atveidošanas un interpretē to kā vērtību ar atbilstošu tipu.

-   `text`: interpretējamais teksts.
-   `culture`: (Neobligāts) Konkrēta kultūra, ko izmanto teksta interpretēšanai (piemēram, "en-US").

Šī funkcija ņem teksta vērtību un atgriež vērtību ar tipu `number`, `logical`, `null`, `datetime`, `duration` vai `text`. Tukša teksta vērtība tiek interpretēta kā `null` vērtība.


## Examples

### Example #1
Pārvērst tekstu, kas apzīmē skaitli, uz tās atbilstošo skaitlisko vērtību.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Pārvērst tekstu, kas apzīmē procentuālo vērtību, uz tās atbilstošo skaitlisko vērtību.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Pārvērst tekstu, kas apzīmē Francijas eiro vērtību, uz tās atbilstošo skaitlisko vērtību.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Pārvērst tekstu, kas apzīmē Vācijas datumu un laiku, uz tā atbilstošo datuma un laika vērtību.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
