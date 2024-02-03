---
title: List.AllTrue
---

# List.AllTrue


## Description

Tiek atgriezta vērtība True, ja visas izteiksmes ir patiesas.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Tiek atgriezta vērtība True, ja visas sarakstā <code>list</code> ietvertās izteiksmes ir patiesas.


## Examples

### Example #1 
Nosakiet, vai visas sarakstā \{true, true, 2 &gt; 0} ietvertās izteiksmes ir patiesas.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Nosakiet, vai visas sarakstā \{true, true, 2 &lt; 0} ietvertās izteiksmes ir patiesas.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
