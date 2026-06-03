---
title: List.Durations
---

# List.Durations


Generates a list of duration values given an initial value, count, and incremental duration value.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Returns a list of `count` `duration` values, starting at `start` and incremented by the given `duration` `step`.


## Examples

### Example #1
Create a list of 5 values starting with 1 hour and incrementing by an hour.
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
