---
title: List.Random
---

# List.Random


## Description

Tiek atgriezts gadījumskaitļu saraksts.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Atgriež gadījumskaitļu (diapazonā starp 0 un 1) sarakstu atbilstoši norādītajam ģenerējamo vērtību skaitam un papildu sākotnējai vērtībai.<ul>   <li><code>count</code>: ģenerējamo gadījumvērtību skaits.</li>   <li><code>seed</code>: <i>[Neobligāti]</i> skaitliska vērtība, kas tiek izmantota kā gadījumskaitļu ģeneratora sākotnējā vērtība.  Ja šī vērtība netiek norādīta, ikreiz, kad izsaucat šo funkciju, tiek ģenerēts unikāls gadījumskaitļu saraksts.  Ja tiek norādīta skaitliska sākotnējā vērtība, ikreiz, kad izsaucat šo funkciju, tiek ģenerēts nemainīgs gadījumskaitļu saraksts.</li></ul>


## Examples

### Example #1 
Izveidojiet 3 gadījumskaitļu sarakstu.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Izveidojiet 3 gadījumskaitļu sarakstu, norādot sākotnējo vērtību.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
