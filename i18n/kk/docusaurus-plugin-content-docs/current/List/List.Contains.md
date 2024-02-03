---
title: List.Contains
---

# List.Contains


## Description

Тізімнің мәнді қамтитынын көрсетеді.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

<code>list</code> тізімі <code>value</code> мәнін қамтитынын көрсетеді.    Мән тізімде табылса, шын мәнін, керісінше болса жалған мәнін қайтарады. Теңдікті тексеруді бақылау үшін <code>equationCriteria</code> міндетті емес теңдеу шарттарының мәнін көрсетуге болады. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} тізімі 3 санын қамтитынын анықтау.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3, 4, 5} тізімі 6 санын қамтитынын анықтау.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
