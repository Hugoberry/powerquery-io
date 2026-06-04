---
title: DateTimeZone.From
---

# DateTimeZone.From


Ustvari vrednost"datetimezone"iz dane vrednosti.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Ustvari vrednost `datetimezone` iz navedene vrednosti.

-   `value`: Vrednost, uporabljena za ustvarjanje vrednosti `datetimezone`.
-   `culture`: (izbirno) Kultura, ki je uporabljena pri pretvorbi vrednosti (na primer"en-US").

Vrednosti naslednjih vrst je mogoče pretvoriti v vrednost `datetimezone`:

-   `text`: Vrne vrednost `datetimezone` iz besedilne predstavitve. Podrobnosti so na voljo v `DateTimeZone.FromText`.
-   `date`: Vrne vrednost `datetimezone` s/z `value` kot komponento datuma, vrednost `12:00:00 AM` kot komponento časa in odmik, ki ustreza lokalnemu časovnemu pasu.
-   `datetime`: Vrne vrednost `datetimezone` s/z`value` kot datum in čas ter odmik, ki ustreza lokalnemu časovnemu pasu.
-   `datetimezone`: Vrne `value`.
-   `time`: Vrne vrednost `datetimezone` z datumom, ki je enakovreden datumu avtomatizacije OLE, `0` kot komponento datuma, `value` kot komponento časa in odmik, ki ustreza lokalnemu časovnemu pasu. Datum avtomatizacije OLE vključuje število s plavajočo vejico, katerega integralna komponenta je število dni pred polnočjo ali po polnoči, 30. december 1899, in katerega komponenta ulomka predstavlja čas na ta dan, deljen s 24. Polnoč, 31. december 1899, je na primer predstavljena z 1.0; 6.00, 1. januar 1900, je predstavljen z 2.25; polnoč, 29. december 1899, je predstavljen z –1.0; 6.00, 29. december 1899, pa je predstavljen z –1,25. Osnovna vrednost je polnoč, 30. december 1899. Najmanjša vrednost je polnoč, 1. januar 0100. Največja vrednost je zadnji trenutek 31. decembra 9999.
-   `number`: Vrne vrednost `datetimezone` z datumom in časom, ki sta enakovredna datumu avtomatizacije OLE, izraženim s/z`value` in odmikom, ki ustreza lokalnemu časovnemu pasu.
-   `null`: Vrne vrednost `null`.

Če je vrednost `value` katere koli druge vrste, je vrnjena napaka.  
  
Vrednost odmika, ki ustreza lokalnemu časovnemu pasu, je drugačna, če to funkcijo izvajate lokalno, kot če jo izvajate v spletu. Pri lokalnem izvajanju je vrnjen lokalni časovni pas. Pri izvajanju v spletu je vrnjen časovni pas UTC (+00:00).


## Examples

### Example #1
Pretvorite besedilno predstavitev datuma, časa in časovnega pasu v vrednost `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Pretvorite besedilno predstavitev brazilsko-portugalskega datuma, časa in časovnega pasu v vrednost `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Pretvorite število, ki predstavlja 1. januar 2025 ob 12.00, v vrednost `datetimezone`. Časovni pas v rezultatu je odvisen od tega, ali se primer izvaja lokalno ali v spletu.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
