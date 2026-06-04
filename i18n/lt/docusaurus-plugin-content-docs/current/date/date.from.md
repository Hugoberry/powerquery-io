---
title: Date.From
---

# Date.From


Naudojant nurodytą reikšmę sukuriama data.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Pateikiama nurodytos reikšmės datos reikšmė.

-   `value`: reikšmė, kuri konvertuojama į datos reikšmę. Jei nurodyta reikšmė yra `null`, ši funkcija pateikia `null`. Jei nurodyta reikšmė yra `date`, pateikiama `value`. Į `date` reikšmę galima konvertuoti reikšmes, kurių tipai yra:
    -   `text`: `date` reikšmė iš tekstinės išraiškos. Daugiau informacijos žr. `Date.FromText`.
    -   `datetime`: `value` datos komponentas.
    -   `datetimezone`: `value` vietos datos ir laiko atitikmens datos komponentas.
    -   `number`: datos ir laiko atitikmens datos komponentas, kurį rodo slankiojo kablelio skaičius, kurio integralinis komponentas yra dienų skaičius iki arba po 1899 m. gruodžio 30 d. vidurnakčio, o trupmeninis komponentas – tos dienos laikas, padalytas iš 24. Pavyzdžiui, 1899 m. gruodžio 31 d. vidurnaktis rodoma kaip 1,0; 1900 m. sausio 1 d., 6.00 val. rodoma kaip 2,25; 1899 m. gruodžio 29 d. vidurnaktis rodomas kaip -1,0; o 1899 m. gruodžio 29 d., 6.00 val. rodoma kaip -1,25. Bazinė reikšmė yra 1899 m. gruodžio 30 d. vidurnaktis. Mažiausia reikšmė yra 0100 m. sausio 1 d. vidurnaktis. Didžiausia reikšmė yra paskutinė 9999 m. gruodžio 31 d. akimirka.
    -   Jei `value` yra bet kokio kito tipo, pateikiama klaida.
-   `culture`: nurodytos reikšmės aplinka (pvz., „en-US“).


## Examples

### Example #1
Konvertuoti nurodytą datą ir laiką į datos reikšmę.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Konvertuoti nurodytą skaičių į datos reikšmę.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Konvertuoti vokiško teksto datas stulpelyje Paskelbimo data į datos reikšmes.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
