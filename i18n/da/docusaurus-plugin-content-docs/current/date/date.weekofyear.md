---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Returnerer et tal fra 1-54, der angiver, hvilken uge i året denne dato ligger i.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Returnerer et tal fra 1-54, der angiver den uge i året, som datoen, `dateTime`, falder i.

-   `dateTime`: En `datetime`\-værdi som bestemmer ugen i året.
-   `firstDayOfWeek`: En valgfri `Day.Type`\-værdi, der angiver, hvilken dag der betragtes som startpunkt for en ny uge (f.eks `Day.Sunday`). Hvis dette ikke angives, bruges en kulturafhængig standard.


## Examples

### Example #1
Afgør, hvilken uge den 27. marts falder i i 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Afgør, hvilken uge 27. marts falder i i 2011, ved hjælp af mandag som starten på ugen.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
