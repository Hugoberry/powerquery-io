---
title: List.Durations
---

# List.Durations


Бастапқы мән, саны және артатын ұзақтық мәні берілсе, ұзақтық мәндерінің тізімін жасайды.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

`start` деп басталатын `count` және көрсетілген `duration` `step` арқылы арттырылатын `duration` мәндерінің тізімін қайтарады.


## Examples

### Example #1
1 сағаттан басталатын және бір сағатпен арттырылатын 5 мәннің тізімін жасау.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
