---
title: List.LastN
---

# List.LastN


## Description

Tiek atgriezta saraksta pēdējā vērtība.  Varat papildus norādīt atgriežamo vērtību skaitu vai kvalifikācijas nosacījumu.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Atgriež saraksta <code>list</code> pēdējo vienumu. Ja saraksts ir tukšs, tiek aktivizēts izņēmums. Šajā funkcijā var norādīt papildu parametru <code>countOrCondition</code>, kas nodrošina vairāku vienumu apkopošanu vai vienumu filtrēšanu. Parametru <code>countOrCondition</code> var norādīt trīs veidos. <ul>  <li>Ja ir norādīts skaitlis, tiek atgriezts šāds vai mazāks skaits vienumu. </li>  <li>Ja ir norādīts nosacījums, tiek atgriezti visi vienumi, kas sākotnēji atbilst šim nosacījumam, pārbaudi sākot no saraksta beigām. Ja kāds vienums neatbilst nosacījumam, nākamie vienumi netiek apstrādāti. </li>  <li>Ja šī parametra vērtība ir nulle, tiek atgriezts saraksta pēdējais vienums.</li> </ul>


## Examples

### Example #1 
Iegūstiet saraksta \{3, 4, 5, -1, 7, 8, 2} pēdējo vērtību.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Iegūstiet saraksta \{3, 4, 5, -1, 7, 8, 2} pēdējās vērtības, kas ir lielākas par 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
