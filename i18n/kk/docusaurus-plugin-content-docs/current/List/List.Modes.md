---
title: List.Modes
---

# List.Modes


## Description

Тізімдегі ең жиі кездесетін мәндердің тізімін қайтарады.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

<code>list</code> тізімінде ең жиі кездесетін элементті қайтарады. Тізім бос болса, ерекшелік пайда болады. Ең көп жиілігі бірдей бірнеше элемент көрінсе, соңғысы таңдалады.    Теңдікті тексеруді бақылау үшін <code>comparisonCriteria</code> міндетті емес мәнін (<code>equationCriteria</code>) көрсетуге болады. 


## Examples

### Example #1 
&lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; тізімінде ең жиі кездесетін элементтерді анықтау.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
