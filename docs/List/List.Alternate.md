---
title: List.Alternate
---

# List.Alternate


## Description

Returns a list comprised of all the odd numbered offset elements in a list.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Returns a list comprised of all the odd numbered offset elements in a list. Alternates between taking and skipping values from the list <code>list</code> depending on the parameters.    <ul>    <li><code>count</code>: Specifies number of values that are skipped each time.</li>    <li><code>repeatInterval</code>: An optional repeat interval to indicate how many values are added in between the skipped values.</li>    <li><code>offset</code>: An option offset parameter to begin skipping the values at the initial offset.</li>    </ul>


## Examples

### Example #1 
Create a list from \{1..10} that skips the first number.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Create a list from \{1..10} that skips every other number.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Create a list from \{1..10} that starts at 1 and skips every other number.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Create a list from \{1..10} that starts at 1, skips one value, keeps two values, and so on.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
