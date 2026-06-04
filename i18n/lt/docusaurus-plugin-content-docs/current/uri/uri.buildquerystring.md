---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Įtraukite įrašą į URI užklausos eilutę.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Įtraukite įrašą `query` į URI užklausos eilutę, jei reikia, naudodami kaitos simbolius.


## Examples

### Example #1
Užkoduokite užklausos eilutę, kurioje yra specialiųjų simbolių.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
