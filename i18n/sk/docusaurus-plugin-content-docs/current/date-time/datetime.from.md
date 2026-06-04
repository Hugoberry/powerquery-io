---
title: DateTime.From
---

# DateTime.From


Vytvorí dátum a čas z danej hodnoty.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Vráti hodnotu `datetime` zo zadanej hodnoty `value`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US). Ak zadaná hodnota `value` je `null`, `DateTime.From` vráti hodnotu `null`. Ak zadaná hodnota `value` je `datetime`, vráti sa hodnota `value`. Hodnoty nasledujúcich typov možno konvertovať na hodnotu `datetime`:

-   `text`: Hodnota `datetime` z textového vyjadrenia. Podrobnosti nájdete v časti `DateTime.FromText`.
-   `date`: Hodnota `datetime` s údajom `value` ako súčasťou dátumu a `12:00:00 AM` ako súčasťou času.
-   `datetimezone`: Miestny ekvivalent `datetime` hodnoty `value`.
-   `time`: Hodnota `datetime` s dátumovým ekvivalentom k dátumu automatizácie OLE hodnoty `0` ako súčasťou dátumu a hodnoty `value` ako súčasťou času.
-   `number`: Ekvivalent `datetime` k dátumu automatizácie OLE vyjadrený pomocou funkcie `value`.

Ak je hodnota `value` akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1
Konvertujte hodnotu `#time(06, 45, 12)` na hodnotu `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Konvertujte hodnotu `#date(1975, 4, 4)` na hodnotu `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
