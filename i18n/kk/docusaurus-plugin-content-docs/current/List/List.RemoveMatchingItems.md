---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Кіріс мәндердің барлық даналарын жояды.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

<code>list2</code> ішіндегі көрсетілген мәндердің барлық даналарын <code>list1</code> тізімінен жояды. Егер <code>list2</code> ішіндегі мәндер <code>list1</code> ішінде жоқ болса, бастапқы тізім қайтарылады.    Теңдікті тексеруді бақылау үшін <code>equationCriteria</code> міндетті емес теңдеу шарттарының мәнін көрсетуге болады. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5, 5} мәндерінен \{1, 5} мәндері жоқ тізімді жасау.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
