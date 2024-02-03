---
title: Function.From
---

# Function.From


## Description

Creates a function with a specific parameter signature on top of a function that takes a single list argument


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Takes a unary function <code>function</code> and creates a new function with the type <code>functionType</code> that constructs a list out of its arguments and passes it to <code>function</code>.


## Examples

### Example #1 
Converts List.Sum into a two-argument function whose arguments are added together
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Converts a function taking a list into a two-argument function
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
