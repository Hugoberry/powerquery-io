---
title: List.Sum
---

# List.Sum


## Description

Тізімдегі элементтердің қосындысын қайтарады.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

<code>list</code> тізіміндегі null емес мәндердің қосындысын қайтарады.  Тізімде мәні нөл емес мәндер жоқ болса, нөл мәнін қайтарады.


## Examples

### Example #1 
&lt;code&gt;\{1, 2, 3}&lt;/code&gt; тізіміндегі сандардың қосындысын анықтау.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
