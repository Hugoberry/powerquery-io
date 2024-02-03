---
title: List.Sort
---

# List.Sort


## Description

Datu saraksts tiek sakārtots atbilstoši norādītājam kritērijam.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Datu saraksts <code>list</code> tiek sakārtots atbilstoši norādītājiem papildu kritērijiem.    Varat norādīt papildu parametru <code>comparisonCriteria</code>, lai definētu salīdzināšanas kritēriju. Tālāk ir norādītas šī parametra iespējamās vērtības.    <ul>    <li> Lai kontrolētu secību, salīdzināšanas kritērijam varat norādīt tipa Order uzskaitījuma vērtību. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>     <li> Lai aprēķinātu kārtošanai lietojamo atslēgu, varat izmantot 1 argumenta funkciju. </li>     <li> Lai atlasītu atslēgu un kontrolētu secību, kā salīdzināšanas kritērija vērtību varat izmantot sarakstu, kurā ir norādīta atslēga un tipa Order vērtība (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Lai pilnībā kontrolētu salīdzināšanu, var izmantot 2 argumentu funkciju. Šī funkcija nodos divus vienumus no saraksta (jebkurus divus vienumus jebkādā secībā). Šai funkcijai ir jāatgriež kāda no šīm vērtībām:        <ul>            <li> <code>-1</code>: pirmais vienums ir mazāks par otro vienumu.</li>            <li> <code>0</code>: vienumi ir vienādi.</li>            <li> <code>1</code>: pirmais vienums ir lielāks par otro vienumu.</li>        </ul>        Lai lietotu šo pieeju, varat izmantot metodi Value.Compare. </li>    </ul>


## Examples

### Example #1 
Sakārtojiet sarakstu \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Sakārtojiet sarakstu \{2, 3, 1} dilstošā secībā.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Sakārtojiet sarakstu \{2, 3, 1} dilstošā secībā, izmantojot metodi Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
