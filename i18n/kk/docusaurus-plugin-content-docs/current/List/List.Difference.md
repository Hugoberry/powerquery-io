---
title: List.Difference
---

# List.Difference


## Description

Екі көрсетілген тізімнің айырмашылығын қайтарады.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

<code>list1</code> тізіміндегі <code>list2</code> тізімінде жоқ элементтерді қайтарады. Қайталанатын мәндерге қолдау көрсетіледі.    Теңдікті тексеруді бақылау үшін <code>equationCriteria</code> міндетті емес теңдеу шарттарының мәнін көрсетуге болады. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} тізіміндегі \{4, 5, 3} тізімінде жоқ элементтерді анықтау.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
\{1, 2} тізіміндегі \{1, 2, 3} тізімінде жоқ элементтерді анықтау.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
