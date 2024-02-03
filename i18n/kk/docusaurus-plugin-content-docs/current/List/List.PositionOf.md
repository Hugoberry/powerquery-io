---
title: List.PositionOf
---

# List.PositionOf


## Description

Тізімдегі мәннің ауытқу(лар)ын қайтарады.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

<code>value</code> мәні <code>list</code> тізімінде кездесетін ауытқуды қайтарады. Мән жоқ болса, -1 мәнін қайтарады.    <code>occurrence</code> міндетті емес дана параметрін көрсетуге болады.<ul>   <li><code>occurrence</code>: есеп беретін даналардың ең көп саны.</li></ul>


## Examples

### Example #1 
\{1, 2, 3} тізіміндегі 3 мәні кездесетін орынды анықтау.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
