---
title: List.Average
---

# List.Average


## Description

Az értékek átlagát adja vissza. Számértékekkel, valamint date, datetime, datetimezone és duration típusú értékekkel használható.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

A(z) <code>list</code> lista elemeinek átlagértékét adja vissza. Az eredmény adattípusa meg fog egyezni a lista értékeinek adattípusával. Csak számértékekkel, valamint date, time, datetime, datetimezone és duration típusú értékekkel használható.    Ha a lista üres, null értéket ad vissza.


## Examples

### Example #1 
A &lt;code&gt;\{3, 4, 6}&lt;/code&gt; számlista átlagának kiszámítása
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
A 2011. január 1., a 2011. január 2. és a 2011. január 3. dátumértékek átlagának kiszámítása.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
