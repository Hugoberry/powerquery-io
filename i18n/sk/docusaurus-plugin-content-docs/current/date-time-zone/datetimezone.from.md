---
title: DateTimeZone.From
---

# DateTimeZone.From


Vytvorí údaj datetimezone z danej hodnoty.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Vytvorí `datetimezone` z danej hodnoty.

-   `value`: Hodnota použitá na vytvorenie `datetimezone`.
-   `culture`: (Voliteľné) Jazyková verzia na použitie pri transformácii hodnoty (napríklad en-US).

Hodnoty nasledujúcich typov možno skonvertovať na hodnotu `datetimezone`:

-   `text`: Vráti hodnotu `datetimezone` z textového vyjadrenia. Podrobnosti nájdete v `DateTimeZone.FromText`.
-   `date`: Vráti hodnotu `datetimezone` s `value` ako dátumovou zložkou, `12:00:00 AM` ako časovou zložkou a posunom zodpovedajúcim miestnemu časovému pásmu.
-   `datetime`: Vráti hodnotu `datetimezone` s `value` ako dátumom a časom a posunom zodpovedajúcim miestnemu časovému pásmu.
-   `datetimezone`: Vráti `value`.
-   `time`: Vráti hodnotu `datetimezone` s dátumovým ekvivalentom OLE Automation Date hodnoty `0` ako dátumovou zložkou, `value` ako časovou zložkou a posunom zodpovedajúcim miestnemu časovému pásmu. OLE Automation Date sa skladá z čísla s pohyblivou desatinnou čiarkou, ktorého integrál je počet dní pred polnocou alebo po polnoci, 30. decembra 1899 a ktorého zlomková súčasť predstavuje čas v daný deň vydelený číslom 24. Napríklad polnoc 31. decembra 1899 je vyjadrená hodnotou 1,0; 6:00, 1. januára 1900 predstavuje 2,25; polnoc, 29. decembra 1899 je zastúpená hodnotou -1.0; a 6:00, 29. decembra 1899 je vyjadrený hodnotou -1,25. Základná hodnota je polnoc 30. decembra 1899. Minimálna hodnota je polnoc, 1. január 0100. Maximálna hodnota je posledný okamih 31. decembra 9999.
-   `number`: Vráti hodnotu `datetimezone` s ekvivalentom dátumu a času OLE Automation Date vyjadreným hodnotou `value` a posunom zodpovedajúcim miestnemu časovému pásmu.
-   `null`: Vráti hodnotu `null`.

Ak je `value` akéhokoľvek iného typu, vráti sa chyba.  
  
Hodnota posunu zodpovedajúceho miestnemu časovému pásmu sa líši pri spustení tejto funkcie lokálne na rozdiel od spustenia online. Pri lokálnom spustení sa vráti miestne časové pásmo. Pri spustení online sa vráti časové pásmo UTC (+00:00).


## Examples

### Example #1
Skonvertuje textové vyjadrenie dátumu, času a časového pásma na hodnotu `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Skonvertuje textové vyjadrenie dátumu, času a časového pásma v brazílskej portugalčine na hodnotu `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Skonvertuje číslo predstavujúce údaj 1. januára 2025 o 12:00 na hodnotu `datetimezone`. Časové pásmo vo výsledku závisí od toho, či je príklad spustený lokálne, alebo online.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
