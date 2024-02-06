---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


Returns a function that combines a list of text using the specified lengths.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Remarks

Returns a function that combines a list of text values into a single text value using the specified lengths.


## Examples

### Example #1 
Combine a list of text values by extracting the specified numbers of characters from each input value.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Combine a list of text values by extracting the specified numbers of characters, after first pre-filling the result with the template text.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
