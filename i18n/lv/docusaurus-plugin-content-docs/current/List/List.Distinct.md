---
title: List.Distinct
---

# List.Distinct


## Description

Tiek atgriezts vērtību saraksts, no kura ir noņemti vērtību dublikāti.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Tiek atgriezts saraksts, kurā ir ietvertas visas saraksta <code>list</code> unikālās vērtības. Ja saraksts ir tukšs, arī rezultāts ir tukšs saraksts.


## Examples

### Example #1 
Noņemiet vērtību dublikātus no saraksta \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
