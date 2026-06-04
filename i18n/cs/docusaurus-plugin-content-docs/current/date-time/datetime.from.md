---
title: DateTime.From
---

# DateTime.From


Vytvoří z dané hodnoty hodnotu datetime.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Vrátí hodnotu `datetime` z předané hodnoty `value`. Volitelně je možné zadat i `culture` (např. en-US). Pokud předaná hodnota `value` je `null`, funkce `DateTime.From` vrátí hodnotu `null`. Pokud je předaná hodnota `value` typu `datetime`, je vrácena hodnota `value`. Na hodnoty `datetime` lze převést hodnoty následujících typů:

-   `text`: Hodnota `datetime` z textové reprezentace. Další informace naleznete v popisu funkce `DateTime.FromText`.
-   `date`: Hodnota `datetime` s `value` jako komponentou data a `12:00:00 AM` jako komponentou času.
-   `datetimezone`: Místní ekvivalent `datetime` hodnoty `value`.
-   `time`: Hodnota `datetime` s ekvivalentem data OLE Automation Date z `0` jako komponentou data a `value` jako komponentou času.
-   `number`: Ekvivalent `datetime` vyjádřený OLE Automation Date podle `value`.

Pokud je hodnota `value` jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1
Převést hodnotu `#time(06, 45, 12)` na hodnotu `datetime`
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Převést řetězec `#date(1975, 4, 4)` na hodnotu `datetime`
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
