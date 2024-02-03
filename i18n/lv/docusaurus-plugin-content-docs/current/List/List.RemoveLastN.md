---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Tiek atgriezts saraksts, kurā ir ietverti ievades saraksta elementi, noņemot norādīto skaitu elementu saraksta beigās.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Tiek atgriezts saraksts, kurā ir noņemti pēdējie <code>countOrCondition</code> elementi saraksta <code>list</code> beigās. Ja sarakstā <code>list</code> ir mazāk par <code>countOrCondition</code> elementiem, tiek atgriezts tukšs saraksts. <ul> <li>Ja ir norādīts skaitlis, tiek noņemts šāds vai mazāks skaits vienumu. </li> <li>Ja ir norādīts nosacījums, atgrieztais saraksts beidzas ar saraksta <code>list</code> beigās esošo pirmo elementu, kas atbilst šim nosacījumam. Ja kāds vienums neatbilst nosacījumam, nākamie vienumi netiek apstrādāti. </li> <li>Ja šī parametra vērtība ir Nulle, tiek noņemts tikai viens vienums. </li> </ul>


## Examples

### Example #1 
Izveidojiet sarakstu no saraksta \{1, 2, 3, 4, 5}, neietverot pēdējos 3 skaitļus.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
No saraksta \{5, 4, 2, 6, 4} izveidojiet sarakstu, kura pēdējā skaitliskā vērtība ir mazāka par 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
