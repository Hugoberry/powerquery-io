---
title: Logical.From
---

# Logical.From


Көрсетілген мәннен логикалық мәнді жасайды.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Берілген `value` ішінен `logical` мәнін қайтарады. Егер берілген `value` `null` болса, `Logical.From` `null` мәнін қайтарады. Егер берілген `value` `logical` болса, `value` қайтарылады. Келесі түрлердің мәндерін `logical` мәніне түрлендіруге болады:

-   `text`: мәтіндік мәннен алынған `logical` мәні, `"true"` немесе `"false"`. Қосымша мәліметтерді `Logical.FromText` бөлімінен қараңыз.
-   `number`: `value` `0` тең болса, `false`, олай болмаса, `true`.

Егер `value` кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1
`2` мәнін `logical` мәніне түрлендіру.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
