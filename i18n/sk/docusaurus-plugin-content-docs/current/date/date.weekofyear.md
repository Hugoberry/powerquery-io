---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Vráti číslo od 1 do 54 udávajúce týždeň v roku, do ktorého spadá tento dátum.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Vráti číslo od 1 do 54 udávajúce týždeň v roku zodpovedajúci dátumu `dateTime`.

-   `dateTime`: Hodnota `datetime`, pre ktorú sa určuje týždeň v roku.
-   `firstDayOfWeek`: Voliteľná hodnota `Day.Type`, ktorá určuje, ktorý deň predstavuje začiatok nového týždňa (napríklad `Day.Sunday`). Ak hodnota nie je zadaná, použije sa predvolená hodnota podľa lokálnych zvyklostí.


## Examples

### Example #1
Určte, ktorý týždeň v roku obsahuje dátum 27. marec 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Určte, ktorý týždeň v roku obsahuje dátum 27. marec 2011, pričom sa pondelok použije ako začiatok týždňa.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
