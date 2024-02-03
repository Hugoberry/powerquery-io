---
title: List.Alternate
---

# List.Alternate


## Description

Tiek atgriezts saraksts, kurā ir ietverti visi sarakstā esošie nobīdes elementi, kuru numurs ir nepāra skaitlis.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Tiek atgriezts saraksts, kurā ir ietverti visi sarakstā esošie nobīdes elementi, kuru numurs ir nepāra skaitlis. Atkarībā no parametriem tiek iegūtas vai izlaistas noteiktas saraksta <code>list</code> vērtības.    <ul>    <li><code>count</code>: tiek norādīts katrā izpildes reizē izlaižamo vērtību skaits.</li>    <li><code>repeatInterval</code>: papildu atkārtošanas intervāls, ar kuru tiek norādīts starp izlaistajām vērtībām pievienojamo vērtību skaits.</li>    <li><code>offset</code>: papildu nobīdes parametrs, ar kuru tiek norādīts, ka vērtību izlaišana ir jāsāk atbilstoši sākotnējai nobīdei.</li>    </ul>


## Examples

### Example #1 
Izveidojiet sarakstu no saraksta \{1..10}, izlaižot pirmo skaitli.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Izveidojiet sarakstu no saraksta \{1..10}, izlaižot katru otro skaitli.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Izveidojiet sarakstu no saraksta \{1..10}, ietverot skaitli 1 un izlaižot katru otro skaitli.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Izveidojiet sarakstu no saraksta \{1..10}, ietverot skaitli 1, izlaižot vienu vērtību, ietverot divas nākamās vērtības utt.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
