---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

Atgriež sarakstu, kurā ir ietverti ievades saraksta elementi, izlaižot norādīto skaitu elementu saraksta sākumā.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Atgriež sarakstu, kas noņem pirmo saraksta <code>list</code> elementu. Ja saraksts <code>list</code> ir tukšs, tiek atgriezts tukšs saraksts.Šajā funkcijā varat norādīt papildu parametru <code>countOrCondition</code>, kas nodrošina vairāku vērtību noņemšanu, kā tas ir norādīts tālāk. <ul> <li>Ja ir norādīts skaitlis, tiek noņemts šāds vai mazāks skaits vienumu. </li> <li>Ja ir norādīts nosacījums, atgrieztais saraksts sākas ar saraksta <code>list</code> pirmo elementu, kas atbilst kritērijiem. Ja kāds vienums neatbilst nosacījumam, nākamie vienumi netiek apstrādāti. </li> <li>Ja šī parametra vērtība ir Null, tiek veikta noklusējuma darbība. </li> </ul>


## Examples

### Example #1 
Izveidojiet sarakstu no saraksta \{1, 2, 3, 4, 5}, neietverot pirmos 3 skaitļus.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
No saraksta \{5, 4, 2, 6, 1} izveidojiet sarakstu, kura pirmā skaitliskā vērtība ir mazāka par 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
