---
title: List.FirstN
---

# List.FirstN


## Description

Tiek atgriezta saraksta pirmā vienumu kopa atbilstoši norādītajam atgriežamo vienumu skaitam vai kvalifikācijas nosacījumam.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Ja ir norādīts skaitlis, tiek atgriezts šāds vai mazāks skaits vienumu. </li>  <li>Ja ir norādīts nosacījums, tiek atgriezti visi vienumi, kas sākotnēji atbilst šim nosacījumam. Ja kāds vienums neatbilst nosacījumam, nākamie vienumi netiek apstrādāti. </li> </ul>


## Examples

### Example #1 
Iegūstiet saraksta \{3, 4, 5, -1, 7, 8, 2} sākotnējās vērtības, kas ir lielākas par 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
