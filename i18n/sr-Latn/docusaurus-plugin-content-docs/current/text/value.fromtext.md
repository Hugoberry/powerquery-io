---
title: Value.FromText
---

# Value.FromText


Kreira vrednost podudarnog tipa od tekstualne reprezentacije.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Dekodira vrednost iz tekstualne reprezentacije i tumači je kao vrednost odgovarajućeg tipa.

-   `text`: Tekst za tumačenje.
-   `culture`: (Opcionalno) Određena kultura koja se koristi za tumačenje teksta (na primer, „en-US“).

Ova funkcija uzima tekstualnu vrednost i vraća vrednost tipa `number`, `logical`, `null`, `datetime`, `duration` ili `text`. Prazna tekstualna vrednost se tumači kao vrednost `bez vrednosti`.


## Examples

### Example #1
Konvertujte tekst koji predstavlja broj u odgovarajuću vrednost broja.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Konvertujte tekst koji predstavlja procenat u odgovarajuću brojčanu vrednost.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Konvertujte tekst koji predstavlja francusku vrednost evra u odgovarajuću brojčanu vrednost.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Konvertujte tekst koji predstavlja nemački datum i vreme u odgovarajuću vrednost datuma i vremena.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
