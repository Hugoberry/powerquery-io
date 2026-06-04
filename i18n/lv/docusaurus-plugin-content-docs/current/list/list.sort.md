---
title: List.Sort
---

# List.Sort


Datu saraksts tiek sakārtots atbilstoši norādītājam kritērijam.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Datu saraksts `list` tiek sakārtots atbilstoši norādītājiem papildu kritērijiem. Varat norādīt papildu parametru `comparisonCriteria`, lai definētu salīdzināšanas kritēriju. Tālāk ir norādītas šī parametra iespējamās vērtības.

-   Lai kontrolētu secību, salīdzināšanas kritērijam varat norādīt tipa Order uzskaitījuma vērtību. (`Order.Descending`, `Order.Ascending`).
-   Lai aprēķinātu kārtošanai lietojamo atslēgu, varat izmantot 1 argumenta funkciju.
-   Lai atlasītu atslēgu un kontrolētu secību, kā salīdzināšanas kritērija vērtību varat izmantot sarakstu, kurā ir norādīta atslēga un tipa Order vērtība (`{each 1 / _, Order.Descending}`).
-   Lai pilnībā kontrolētu salīdzināšanu, var izmantot 2 argumentu funkciju (piemēram, Value.Compare). Šī funkcija nodos divus vienumus no saraksta (jebkurus divus vienumus jebkādā secībā). Šai funkcijai ir jāatgriež kāda no šīm vērtībām:
    -   `-1`: pirmais vienums ir mazāks par otro vienumu.
    -   `0`: vienumi ir vienādi.
    -   `1`: pirmais vienums ir lielāks par otro vienumu.


## Examples

### Example #1
Sakārtojiet sarakstu \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Sakārtojiet sarakstu \{2, 3, 1\} dilstošā secībā.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Sakārtojiet sarakstu \{2, 3, 1\} dilstošā secībā, izmantojot metodi Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
