---
title: Time.From
---

# Time.From


Осы мәннен уақытты жасайды.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Берілген `value` мәнінен `time` мәнін қайтарады. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US"). Егер берілген `value` `null` болса, `Time.From` `null` мәнін қайтарады. Егер берілген `value` `time` болса, `value` қайтарылады. Келесі түрлердегі мәндерді `time` мәніне түрлендіруге болады:

-   `text`: мәтіндік көріністен алынған `time` мәні. Мәліметтерді алу үшін `Time.FromText` қараңыз.
-   `datetime`: `value` мәнінің уақыт компоненті.
-   `datetimezone`: `value` жергілікті күн/уақыт баламасының уақыт компоненті.
-   `number`: `time` `value` арқылы көрсетілген бөлшек күндер санының баламасы. Егер `value` теріс, 1-ден үлкенірек немесе оған тең болса, қате қайтарылады.

Егер `value` кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1
`0.7575` мәнін `time` мәніне түрлендіру.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
`#datetime(1899, 12, 30, 06, 45, 12)` мәнін `time` мәніне түрлендіру.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
