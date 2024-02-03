---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Тізімдегі мәннің бірінші ауытқуын қайтарады.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

<code>list</code> тізімінде <code>values</code> тізіміндегі мәннің бірінші данасының ауытқуын қайтарады. Егер дана табылмаса, -1 мәнін қайтарады.    <code>occurrence</code> міндетті емес дана параметрін көрсетуге болады.<ul>   <li><code>occurrence</code>: қайтаруға болатын даналардың ең көп саны.</li></ul>


## Examples

### Example #1 
\{1, 2, 3} тізіміндегі 2 немесе 3 мәні кездесетін бірінші орынды анықтау.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
