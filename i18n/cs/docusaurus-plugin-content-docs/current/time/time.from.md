---
title: Time.From
---

# Time.From


Vytvoří časovou hodnotu z předané hodnoty.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Vrátí hodnotu `time` z předané hodnoty `value`. Volitelně je možné zadat i `culture` (např. en-US). Pokud je předaná hodnota `value` `null`, funkce `Time.From` vrátí hodnotu `null`. Pokud je předaná hodnota `value` typu `time`, vrátí se hodnota `value`. Na hodnoty `time` jde převést hodnoty následujících typů:

-   `text`: Hodnota `time` z textové reprezentace Další informace naleznete v popisu funkce `Time.FromText`.
-   `datetime`: Časová komponenta hodnoty `value`
-   `datetimezone`: Časová komponenta místního ekvivalentu hodnoty `value`
-   `number`: Hodnota `time` odpovídající počtu zlomků dnů vyjádřených výrazem `value`. Pokud je hodnota `value` záporná nebo větší nebo rovna 1, je vrácena chyba.

Pokud je hodnota `value` jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1
Převede hodnotu `0.7575` na hodnotu `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Převede hodnotu `#datetime(1899, 12, 30, 06, 45, 12)` na hodnotu `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
