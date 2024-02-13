---
title: List.IsEmpty
---

# List.IsEmpty


Returnerar true om listan är tom.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Returnerar <code>true</code> om listan, <code>list</code>, inte innehåller några värden (längd 0). Om listan innehåller värden (längd > 0) returneras <code>false</code>.


## Examples

### Example #1 
Kontrollera om listan \{} är tom.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om listan \{1, 2} är tom.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
