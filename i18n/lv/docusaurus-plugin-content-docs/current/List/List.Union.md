---
title: List.Union
---

# List.Union


## Description

Tiek atgriezts ievades sarakstu vērtību apvienojums.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Apstrādā sarakstu sarakstu <code>lists</code>, apvieno atsevišķo sarakstu vienumus un atgriež izvades sarakstu, kurā ir ietverti šie vienumi. Tādējādi atgrieztajā sarakstā ir ietverti visi vienumi, kas ir iekļauti jebkurā no ievades sarakstiem.    Šīs operācijas ietvaros tiek lietota standarta krājsemantika, tāpēc, veicot apvienošanu, tiek noteikta vērtību dublikātu atbilstība.    Varat norādīt papildu vienādojuma kritēriju vērtību <code>equationCriteria</code>, lai kontrolētu vienādības pārbaudi. 


## Examples

### Example #1 
Izveidojiet sarakstu \{1..5}, \{2..6} un \{3..7} apvienojumu.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
