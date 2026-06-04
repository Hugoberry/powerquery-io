---
title: DateTimeZone.From
---

# DateTimeZone.From


Iš nurodytos reikšmės sukuriama datos ir laiko juosta.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Sukuria `datos ir laiko juostą` iš nurodytos reikšmės.

-   `value`: reikšmė, naudojama kuriant `datos ir laiko juostą`.
-   `culture`: (pasirinktinai) kultūra, naudojama transformuojant reikšmę (pvz., „en-US“).

Šių tipų reikšmes galima konvertuoti į `datos ir laiko juostos` reikšmę:

-   `tekstas`: pateikia `datos ir laiko juostos` reikšmę iš tekstinės pateikties. Daugiau informacijos žr. `DateTimeZone.FromText`.
-   `datetime`: pateikia `datos ir laiko juostą`, kur `value` yra datos komponentas, `12:00:00 AM` yra laiko komponentas, ir poslinkį, atitinkantį vietinę laiko juostą.
-   `datos ir laiko juosta`: pateikia `datos ir laiko juostą`, kur `value` yra data/laikas, ir poslinkį, atitinkantį vietinę laiko juostą.
-   `datos ir laiko juosta`: pateikia `value`.
-   `time`: pateikia `datos ir laiko juostą`, kur datos reikšmė atitinka OLE automatizacijos datą `0` kaip datos komponentas, `value` kaip laiko komponentas, ir poslinkį, atitinkantį vietinę laiko juostą. OLE automatizavimo datą sudaro slankiojo kablelio skaičius, kurio integralinis komponentas yra dienų skaičius iki arba po 1899 m. gruodžio 30 d. vidurnakčio, o trupmeninis komponentas – tos dienos laikas, padalytas iš 24. Pavyzdžiui, 1899 m. gruodžio 31 d. vidurnaktis rodoma kaip 1,0; 1900 m. sausio 1 d., 6.00 val. rodoma kaip 2,25; 1899 m. gruodžio 29 d. vidurnaktis rodomas kaip -1,0; o 1899 m. gruodžio 29 d., 6.00 val. rodoma kaip -1,25. Bazinė reikšmė yra 1899 m. gruodžio 30 d. vidurnaktis. Mažiausia reikšmė yra 0100 m. sausio 1 d. vidurnaktis. Didžiausia reikšmė yra paskutinė 9999 m. gruodžio 31 d. akimirka.
-   `skaičius`: pateikia `datos ir laiko juostą`, kur datos/laiko reikšmė atitinka OLE automatizacijos datą, išreikštą per `value`, o poslinkis atitinka vietinę laiko juostą.
-   `null`: pateikia `null`.

Jei `value` yra bet kokio kito tipo, pateikiama klaida.  
  
Poslinkio reikšmė, atitinkanti vietos laiko juostą, skiriasi, kai ši funkcija veikia vietoje, o ne internete. Vykdant vietoje, pateikiama vietinė laiko juosta. Vykdant internetu, pateikiama UTC laiko juosta (+00:00).


## Examples

### Example #1
Konvertuokite datos, laiko ir laiko juostos tekstinę pateiktį į `datos ir laiko juostos` reikšmę.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Konvertuokite Brazilijos portugalų datos, laiko ir laiko juostos tekstinę išraišką į `datos ir laiko juostos` reikšmę.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Konvertuokite skaičių, rodantį 2025 m. sausio 1 d. 12 val. į `datos ir laiko juostos` reikšmę. Rezultatų laiko juosta priklauso nuo to, ar pavyzdys vykdomas vietoje, ar internete.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
