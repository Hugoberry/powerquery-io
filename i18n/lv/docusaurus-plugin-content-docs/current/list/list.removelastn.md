---
title: List.RemoveLastN
---

# List.RemoveLastN


Tiek atgriezts saraksts, kurā ir ietverti ievades saraksta elementi, noņemot norādīto skaitu elementu saraksta beigās.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Tiek atgriezts saraksts, kurā ir noņemti pēdējie `countOrCondition` elementi saraksta `list` beigās. Ja `list` ir mazāk nekā `countOrCondition` elementi, tiek atgriezts tukšs saraksts.

-   Ja ir norādīts skaitlis, tiek noņemts ne vairāk kā tik daudz vienumu.
-   Ja ir norādīts nosacījums, visi secīgie atbilstošie vienumi `list` beigās tiek noņemti.
-   Ja šī parametra vērtība ir null, tiek noņemts tikai viens vienums.


## Examples

### Example #1
Izveidojiet sarakstu no saraksta \{1, 2, 3, 4, 5\}, neietverot pēdējos 3 skaitļus.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
No saraksta \{5, 4, 2, 6, 4\} izveidojiet sarakstu, kura pēdējā skaitliskā vērtība ir mazāka par 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
