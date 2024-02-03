---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Тізім басқа тізімдегі мәндердің кез келгенін қайда қамтитынын көрсетеді.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

<code>list</code> тізімі <code>values</code> екінші тізіміндегі мәндердің кез келгенін қамтитынын көрсетеді.        Мән тізімде табылса, шын мәнін, керісінше болса өтірік мәнін қайтарады. Теңдікті тексеруді бақылау үшін <code>equationCriteria</code> міндетті емес теңдеу шарттарының мәнін көрсетуге болады. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} тізімі 3 немесе 9 санын қамтитынын анықтау.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3, 4, 5} тізімі 6 немесе 7 сандарын қамтитынын анықтау.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
