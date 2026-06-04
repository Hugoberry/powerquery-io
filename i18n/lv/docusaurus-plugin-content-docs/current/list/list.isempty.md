---
title: List.IsEmpty
---

# List.IsEmpty


Tiek atgriezta vērtība True, ja saraksts ir tukšs.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Tiek atgriezta vērtība `true`, ja sarakstā `list` nav nevienas vērtības (tā garums ir 0). Ja sarakstā ir kāda vērtība (garums > 0), tiek atgriezta vērtība `false`.


## Examples

### Example #1
Uzziniet, vai saraksts \{\} ir tukšs.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Uzziniet, vai saraksts \{1, 2\} ir tukšs.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
