---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Кіріс мәндердің барлық даналарын жояды.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

`list2` ішіндегі көрсетілген мәндердің барлық даналарын `list1` тізімінен жояды. Егер `list2` ішіндегі мәндер `list1` ішінде жоқ болса, бастапқы тізім қайтарылады. Теңдікті тексеруді бақылау үшін `equationCriteria` міндетті емес теңдеу шарттарының мәнін көрсетуге болады.


## Examples

### Example #1
\{1, 2, 3, 4, 5, 5\} мәндерінен \{1, 5\} мәндері жоқ тізімді жасау.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
