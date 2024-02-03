---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Тізім басқа тізімдегі барлық мәндерді қайда қамтитынын көрсетеді.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

<code>list</code> тізімі <code>values</code> екінші тізіміндегі барлық мәндерді қамтитынын көрсетеді.    Мән тізімде табылса, шын мәнін, керісінше болса өтірік мәнін қайтарады. Теңдікті тексеруді бақылау үшін <code>equationCriteria</code> міндетті емес теңдеу шарттарының мәнін көрсетуге болады. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} тізімі 3 және 4 сандарын қамтитынын анықтау.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3, 4, 5} тізімі 5 және 6 сандарын қамтитынын анықтау.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
