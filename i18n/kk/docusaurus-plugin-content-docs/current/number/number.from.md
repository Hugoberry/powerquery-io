---
title: Number.From
---

# Number.From


Осы мәннен санды жасайды.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Берілген `value` мәнінен `number` мәнін қайтарады. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US"). Егер берілген `value` `null` болса, `Number.From` `null` мәнін қайтарады. Егер берілген `value` `number` болса, `value` қайтарылады. Келесі түрлерегі мәндерді `number` мәніне түрлендіруге болады:

-   `text`: мәтіндік көріністен алынған `number` мәні. Жалпы мәтіндік пішімдер өңделеді ("15", "3423,10", "5.0E-10"). Мәліметтерді алу үшін `Number.FromText` қараңыз.
-   `logical`: 1 `true` үшін, 0 `false` үшін.
-   `datetime`: OLE автоматтандыру күнінің баламасын қамтитын қос дәлдігі бар қалқымалы нүктесі бар сан.
-   `datetimezone`: `value` жергілікті күні мен уақытының OLE автоматтандыру күнінің баламасын қамтитын қос дәлдігі бар жылжымалы үтірі бар сан.
-   `date`: OLE автоматтандыру күнінің баламасын қамтитын қос дәлдігі бар жылжымалы үтірі бар сан.
-   `time`: бөлшек күндер түрінде көрсетіледі.
-   `duration`: бүтін және бөлшек күндер түрінде көрсетіледі.

Егер `value` кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1
`"4"` мәнінің `number` мәнін алу.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`#datetime(2020, 3, 20, 6, 0, 0)` мәнінің `number` мәнін алу.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
`"12,3%"` үшін `сандық` мәнді алыңыз.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
