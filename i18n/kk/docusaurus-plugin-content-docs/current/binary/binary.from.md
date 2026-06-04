---
title: Binary.From
---

# Binary.From


Осы мәннен екілік файлды жасайды


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Берілген `value` ішінен `binary` мәнін қайтарады. Егер берілген `value` `null` болса, `Binary.From` `null` мәнін қайтарады. Егер берілген `value` `binary` болса, `value` қайтарылады. Келесі түрлердің мәндерін `binary` мәніне түрлендіруге болады:

-   `text`: мәтіндік көріністегі `binary` мәні. Қосымша мәліметтерді `Binary.FromText` бөлімінен қараңыз.

Егер `value` кез келген басқа түрге жатса, қате шығады.


## Examples

### Example #1
`"1011"` мәнінің `binary` мәнін алу.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
