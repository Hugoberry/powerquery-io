---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Tiek atgriezta vērtība True, ja kāda no izteiksmēm ir patiesa.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Tiek atgriezta vērtība True, ja kāda no sarakstā <code>list</code> ietvertajām izteiksmēm ir patiesa.


## Examples

### Example #1 
Nosakiet, vai kāda no sarakstā \{true, false, 2 &gt; 0} ietvertajām izteiksmēm ir patiesa.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Nosakiet, vai kāda no sarakstā \{2 = 0, false, 2 &lt; 0} ietvertajām izteiksmēm ir patiesa.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
