---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Ауыстыру мәндері бар орыннан бастап саналған мәндер санын ауыстырады.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

<code>index</code> көрсетілген орнынан бастап <code>list</code> ішіндегі <code>count</code> мәнді <code>replaceWith</code> тізімімен ауыстырады.


## Examples

### Example #1 
\{1, 2, 7, 8, 9, 5} тізіміндегі \{7, 8, 9} мәндерін \{3, 4} мәндерімен ауыстыру.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
