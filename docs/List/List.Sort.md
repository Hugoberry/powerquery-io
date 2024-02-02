---
title: List.Sort
---

# List.Sort


## Description

Sorts a list of data according to the criteria specified.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Sorts a list of data, <code>list</code>, according to the optional criteria specified.    An optional parameter, <code>comparisonCriteria</code>, can be specified as the comparison criterion. This can take the following values:    <ul>    <li> To control the order, the comparison criterion can be an Order enum value. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> To compute a key to be used for sorting, a function of 1 argument can be used. </li>    <li> To both select a key and control order, comparison criterion can be a list containing the key and order (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> To completely control the comparison, a function of 2 arguments can be used. This function will be passed two items from the list (any two items, in any order). The function should return one of the following values:        <ul>            <li> <code>-1</code>: The first item is less than the second item.</li>            <li> <code>0</code>: The items are equal.</li>            <li> <code>1</code>: The first item is greater than the second item.</li>        </ul>        Value.Compare is a method that can be used to delegate this logic. </li>    </ul>


## Examples

### Example #1 
Sort the list \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Sort the list \{2, 3, 1} in descending order.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Sort the list \{2, 3, 1} in descending order using the Value.Compare method.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
