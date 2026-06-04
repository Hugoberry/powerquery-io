---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Atgriež sarakstu, kurā ir ietverti ievades saraksta elementi, izlaižot norādīto skaitu elementu saraksta sākumā.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Atgriež sarakstu, kas noņem pirmo saraksta `list` elementu. Ja `list` ir tukšs saraksts, tiek atgriezts tukšs saraksts. Šai funkcijai ir nepieciešams neobligāts parametrs, `countOrCondition`, lai atbalstītu vairāku vērtību noņemšanu, kā norādīts tālāk.

-   Ja ir norādīts skaitlis, tiek noņemts ne vairāk kā tik daudz vienumu.
-   Ja ir norādīts nosacījums, visi secīgie atbilstošie vienumi `list` sākumā tiek noņemti.
-   Ja šis parametrs ir null, tiek novērota noklusējuma reakcija.


## Examples

### Example #1
Izveidojiet sarakstu no saraksta \{1, 2, 3, 4, 5\}, neietverot pirmos 3 skaitļus.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
No saraksta \{5, 4, 2, 6, 1\} izveidojiet sarakstu, kura pirmā skaitliskā vērtība ir mazāka par 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
