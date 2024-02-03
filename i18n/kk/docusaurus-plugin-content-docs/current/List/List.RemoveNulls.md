---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Көрсетілген тізімнен барлық &#34;null&#34; мәндерін жояды.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

<code>list</code> ішіндегі "null" мәндерінің барлық даналарын жояды. Егер тізімде "null" мәндері болмаса, бастапқы тізім қайтарылады.


## Examples

### Example #1 
\{1, 2, 3, null, 4, 5, null, 6} тізімінен &#34;null&#34; мәндерін жою.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
