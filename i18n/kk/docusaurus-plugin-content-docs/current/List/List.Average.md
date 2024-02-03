---
title: List.Average
---

# List.Average


## Description

Мәндердің орташа мәнін қайтарады. Сан, күн, күн/уақыт, күн/уақыт белдеуі және ұзақтық мәндерімен жұмыс істейді.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

<code>list</code> тізіміндегі элементтер үшін орташа мәнді қайтарады. Нәтиже тізімдегі мәндермен бірдей деректер түрімен беріледі. Тек сан, күн, уақыт, күн/уақыт белдеуі және ұзақтық мәндерімен жұмыс істейді.    Тізім бос болса, нөл мәні қайтарылады.


## Examples

### Example #1 
&lt;code&gt;\{3, 4, 6}&lt;/code&gt; сандар тізімінің орташа мәнін анықтау.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
1 қаңтар 2011 ж., 2 қаңтар 2011 ж. және 3 қаңтар 2011 ж. күн мәндерінің орташа мәнін анықтау.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
