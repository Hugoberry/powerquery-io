---
title: List.Random
---

# List.Random


Returns a list of random numbers.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Returns a list of random numbers between 0 and 1, given the number of values to generate and an optional seed value.<ul>   <li><code>count</code>: The number of random values to generate.</li>   <li><code>seed</code>:  <i>[Optional]</i> A numeric value used to seed the random number generator.  If omitted a unique list of random numbers is generated each time you call the function.  If you specify the seed value with a number every call to the function generates the same list of random numbers.</li></ul>


## Examples

### Example #1 
Create a list of 3 random numbers.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Create a list of 3 random numbers, specifying seed value.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
