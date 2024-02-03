---
title: List.Sort
---

# List.Sort


## Description

Seřadí seznam dat podle zadaných kritérií.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Seřadí seznam dat <code>list</code> podle zadaných volitelných kritérií.    Jako kritérium porovnání se dá zadat volitelný parametr <code>comparisonCriteria</code>. Ten může mít tyto hodnoty:    <ul>    <li> K určení pořadí může být kritérium porovnání hodnota výčtu Order. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> K vypočítání klíče, který bude použit k řazení, se dá použít funkce s jedním argumentem. </li>    <li> K výběru klíče a určení pořadí se dá jako kritérium porovnání zadat seznam obsahující klíč a pořadí (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> K úplné kontrole porovnání se dá použít funkce se dvěma argumenty. Této funkci se předají dvě položky ze seznamu (libovolné dvě položky v libovolném pořadí). Funkce by měla vrátit jednu z následujících hodnot:        <ul>            <li> <code>-1</code>: První položka je menší než druhá položka.</li>            <li> <code>0</code>: Položky jsou shodné.</li>            <li> <code>1</code>: První položka je větší než druhá položka.</li>        </ul>        Value.Compare je metoda, která se dá použít k delegování této logiky. </li>    </ul>


## Examples

### Example #1 
Seřadí seznam \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Seřadí seznam \{2, 3, 1} v sestupném pořadí.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Seřadí seznam \{2, 3, 1} v sestupném pořadí pomocí metody Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
