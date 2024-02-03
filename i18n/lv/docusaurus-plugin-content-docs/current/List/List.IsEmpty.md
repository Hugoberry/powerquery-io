---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Tiek atgriezta vērtība True, ja saraksts ir tukšs.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Tiek atgriezta vērtība <code>true</code>, ja sarakstā <code>list</code> nav nevienas vērtības (tā garums ir 0). Ja sarakstā ir kāda vērtība (garums > 0), tiek atgriezta vērtība <code>false</code>.


## Examples

### Example #1 
Uzziniet, vai saraksts \{} ir tukšs.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Uzziniet, vai saraksts \{1, 2} ir tukšs.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
