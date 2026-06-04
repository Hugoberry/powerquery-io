---
title: List.Repeat
---

# List.Repeat


Επιστρέφει μια λίστα με το πλήθος των επαναλήψεων της αρχικής λίστας.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Επιστρέφει μια λίστα με `count` επαναλήψεις της αρχικής λίστας, `list`.


## Examples

### Example #1
Δημιουργήστε μια λίστα στην οποία επαναλαμβάνονται 3 φορές τα \{1, 2\}.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
