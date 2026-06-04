---
title: List.InsertRange
---

# List.InsertRange


Осы индекстегі тізімге мәндерді кірістіреді.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

`values` ішіндегі мәндерді `index` орнындағы `list` ішіне кірістіру арқылы жасалған жаңа тізімді қайтарады. Тізімдегі бірінші орын 0 индексінде болады.

-   `list`: мәндерді кірістіру керек мақсатты тізім.
-   `index`: мәндерді кірістіру керек (`list`) мақсатты тізімінің индексі. Тізімдегі бірінші орын 0 индексінде болады.
-   `values`: `list` ішіне кірістірілетін мәндердің тізімі.


## Examples

### Example #1
(\{3, 4\}) тізімін (\{1, 2, 5\}) мақсатты тізіміне 2 индексінде кірістіру.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
(\{1, \{1.1, 1.2\}\}) енгізілген тізімі бар тізімді (\{2, 3, 4\}) мақсатты тізіміне 0 индексінде кірістіру.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
