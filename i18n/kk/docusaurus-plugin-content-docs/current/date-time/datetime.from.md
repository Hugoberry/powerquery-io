---
title: DateTime.From
---

# DateTime.From


Осы мәннен күнді және уақытты жасайды.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Берілген `value` мәнінен `datetime` мәнін қайтарады. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US"). Егер берілген `value` `null` болса, `DateTime.From` `null` мәнін қайтарады. Егер берілген `value` `datetime` болса, `value` қайтарылады. Келесі түрлердегі мәндерді `datetime` мәніне түрлендіруге болады:

-   `text`: мәтіндік көріністен алынған `datetime` мәні. Мәліметтер алу үшін `DateTime.FromText` қараңыз.
-   `date`: `datetime`, `value` күн компоненті және `12:00:00 AM` уақыт компоненті болып табылады.
-   `datetimezone`: `value` жергілікті `datetime` баламасы.
-   `time`: `datetime`, `0` OLE автоматтандыру күнінің күн баламасы күн компоненті және `value` уақыт компоненті болып табылады.
-   `number`: `value` арқылы көрсетілген OLE автоматтандыру күнінің `datetime` баламасы.

Егер `value` кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1
`#time(06, 45, 12)` мәнін `datetime` мәніне түрлендіру.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
`#date(1975, 4, 4)` мәнін `datetime` мәніне түрлендіру.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
