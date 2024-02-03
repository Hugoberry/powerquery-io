---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Returns a sample based estimate of the standard deviation.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Returns a sample based estimate of the standard deviation of the values in the list, <code>numbersList</code>.    If <code>numbersList</code> is a list of numbers, a number is returned.    An exception is thrown on an empty list or a list of items that is not type <code>number</code>.


## Examples

### Example #1 
Find the standard deviation of the numbers 1 through 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
