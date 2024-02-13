---
title: List.Average
---

# List.Average


Returns the average of the values. Works with number, date, datetime, datetimezone and duration values.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Returns the average value for the items in the list, <code>list</code>. The result is given in the same datatype as the values in the list. Only works with number, date, time, datetime, datetimezone and duration values.    If the list is empty null is returned.


## Examples

### Example #1 
Find the average of the list of numbers, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Find the average of the date values January 1, 2011, January 2, 2011 and January 3, 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
