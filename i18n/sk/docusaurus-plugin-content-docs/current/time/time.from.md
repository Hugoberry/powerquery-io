---
title: Time.From
---

# Time.From


Vytvorí čas z danej hodnoty.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Vráti hodnotu `time` zo zadanej hodnoty `value`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US). Ak zadaná hodnota `value` je `null`, `Time.From` vráti hodnotu `null`. Ak zadaná hodnota `value` je `time`, vráti sa hodnota `value`. Hodnoty nasledujúcich typov možno konvertovať na hodnotu `time`:

-   `text`: Hodnota `time` z textového vyjadrenia. Podrobnosti nájdete v časti `Time.FromText`.
-   `datetime`: Súčasť času hodnoty `value`.
-   `datetimezone`: Súčasť času ekvivalentu miestneho dátumu a času hodnoty `value`.
-   `number`: Ekvivalent `time` k počtu zlomkových dní vyjadrený pomocou príkazu `value`. Ak je hodnota `value` záporná, prípadne väčšia ako alebo rovná hodnote 1, vráti sa chyba.

Ak je hodnota `value` akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1
Konvertujte hodnotu `0.7575` na hodnotu `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Konvertujte hodnotu `#datetime(1899, 12, 30, 06, 45, 12)` na hodnotu `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
