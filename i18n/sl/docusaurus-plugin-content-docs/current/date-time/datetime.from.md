---
title: DateTime.From
---

# DateTime.From


Ustvari vrednost"datetime"iz dane vrednosti.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Vrne vrednost `datetime` iz navedene vrednosti `value`. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI"). Če je navedena vrednost `value` `null`, `DateTime.From` vrne `null`. Če je navedena vrednost `value` `datetime`, je vrnjena vrednost `value`. V vrednost `datetime` lahko pretvorite vrednosti teh vrst:

-   `text`: vrednost `datetime` iz predstavitve v obliki besedila. Za podrobnosti glejte `DateTime.FromText`.
-   `date`: `datetime` z vrednostjo `value` kot komponento"date"in `12:00:00 AM` kot komponento"time".
-   `datetimezone`: lokalni ekvivalent `datetime` za `value`.
-   `time`: `datetime` z vrednostjo"date", ki ustreza datumu avtomatizacije OLE `0` kot komponento"date"in `value` kot komponento"time".
-   `number`: `datetime` z vrednostjo, ki ustreza datumu avtomatizacije OLE, izraženo z `value`.

Če je vrednost `value` katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1
Pretvorite `#time(06, 45, 12)` v vrednost `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Pretvorite `#date(1975, 4, 4)` v vrednost `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
