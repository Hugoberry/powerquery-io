---
title: Duration.From
---

# Duration.From


Осы мәннен ұзақтықты жасайды.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Берілген мәннен ұзақтық мәнін қайтарады.

-   `value`: Ұзақтық алынған мән. `null` `value` берілсе, бұл функция `null` мәнін қайтарады. `Ұзақтық` `value` берілсе, онда `value` қайтарылады. Келесі түрлерге жататын мәндер `ұзақтық` мәніне түрлендіріледі:
    -   `text`: Мәтіндік өткен уақыт пішіндеріндегі `ұзақтық` мәні (d.h:m:s). Мәліметтер алу үшін `Duration.FromText` қараңыз.
    -   `сан`: `value` арқылы көрсетілген бүтін және бөлшек күндер санына баламалы `ұзақтық`.

`value` кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1
`2.525` мәнін `duration` мәніне түрлендіру.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Мәтін `"2.05:55:20.34567"` мәнін `ұзақтық` мәніне түрлендіру.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
