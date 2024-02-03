---
title: List.Mode
---

# List.Mode


## Description

Тізімдегі ең жиі кездесетін мәнді қайтарады.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

<code>list</code> тізімінде ең жиі кездесетін элементті қайтарады. Тізім бос болса, ерекшелік пайда болады. Ең көп жиілігі бірдей бірнеше элемент көрінсе, соңғысы таңдалады.    Теңдікті тексеруді бақылау үшін <code>comparisonCriteria</code> міндетті емес мәнін (<code>equationCriteria</code>) көрсетуге болады. 


## Examples

### Example #1 
&lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt; тізімінде ең жиі кездесетін элементті анықтау.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
&lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; тізімінде ең жиі кездесетін элементті анықтау.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
