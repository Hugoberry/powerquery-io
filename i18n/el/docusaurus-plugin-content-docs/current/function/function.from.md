---
title: Function.From
---

# Function.From


Creates a function with a specific parameter signature on top of a function that takes a single list argument.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Χρησιμοποιεί μια μοναδιαία συνάρτηση `function` και δημιουργεί μια νέα συνάρτηση με τον τύπο `functionType`, ο οποίος κατασκευάζει μια λίστα από τα ορίσματά του και τη διαβιβάζει στο `function`.


## Examples

### Example #1
Converts List.Sum into a two-argument function whose arguments are added together.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Converts a function taking a list into a two-argument function.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
