---
title: List.Sort
---

# List.Sort


## Description

Sorterer en liste over data i overensstemmelse med de angivne kriterier.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Sorterer en liste over data, <code>list</code>, i overensstemmelse med de angivne valgfrie kriterier.    Du kan angive en valgfri parameter, <code>comparisonCriteria</code>, som sammenligningskriterie. Den kan tage følgende værdier:    <ul>    <li> Hvis du vil styre rækkefølgen, kan sammenligningskriteriet være en værdi af typen Order enum. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Hvis du vil beregne en nøgle, der skal bruges til sortering, kan der bruges en funktion med ét argument. </li>    <li> Hvis du både vil vælge en nøgle og styre rækkefølgen, kan sammenligningskriteriet være en liste, der indeholder nøglen og rækkefølgen (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Hvis du vil styre sammenligningen fuldstændig, kan der bruges en funktion med to argumenter. Denne funktion overføres til to elementer fra listen (to vilkårlige elementer i en hvilken som helst rækkefølge). Funktionen skal returnere en af følgende værdier:        <ul>            <li> <code>-1</code>: Det første element er mindre end det andet element.</li>            <li> <code>0</code>: Elementerne er ens.</li>            <li> <code>1</code>: Det første element er større end det andet element.</li>        </ul>        Value.Compare er en metode, der kan bruges til at delegere denne logik. </li>    </ul>


## Examples

### Example #1 
Sortér listen \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Sortér listen \{2, 3, 1} i faldende rækkefølge.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Sortér listen \{2, 3, 1} i faldende rækkefølge ved hjælp af metoden Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
