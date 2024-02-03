---
title: List.InsertRange
---

# List.InsertRange


## Description

Осы индекстегі тізімге мәндерді кірістіреді.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

<code>values</code> ішіндегі мәндерді <code>index</code> орнындағы <code>list</code> ішіне кірістіру арқылы жасалған жаңа тізімді қайтарады. Тізімдегі бірінші орын 0 индексінде болады.      <ul>        <li><code>list</code>: мәндерді кірістіру керек мақсатты тізім.</li>        <li><code>index</code>: мәндерді кірістіру керек (<code>list</code>) мақсатты тізімінің индексі. Тізімдегі бірінші орын 0 индексінде болады.</li>        <li><code>values</code>: <code>list</code> ішіне кірістірілетін мәндердің тізімі.</li>      </ul>


## Examples

### Example #1 
(\{3, 4}) тізімін (\{1, 2, 5}) мақсатты тізіміне 2 индексінде кірістіру.
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
(\{1, \{1.1, 1.2}}) енгізілген тізімі бар тізімді (\{2, 3, 4}) мақсатты тізіміне 0 индексінде кірістіру.
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
