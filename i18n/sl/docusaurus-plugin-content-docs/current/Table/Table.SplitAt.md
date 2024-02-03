---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Vrne seznam, ki vsebuje določene prve vrstice in preostale vrstice.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Vrne seznam, ki vsebuje dve tabeli: tabelo s prvimi vrsticami N za <code>table</code> (kot določa <code>count</code>) in tabelo s preostalimi vrsticami za <code>table</code>.Če sta tabeli na seznamu oštevilčeni točno enkrat in v ustreznem vrstnem redu, bo funkcija oštevilčila <code>table</code> samo enkrat.


## Examples

### Example #1 
Vrne prvi dve vrstici tabele in preostale vrstice tabele.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
