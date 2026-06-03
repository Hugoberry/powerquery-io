---
title: List.Sort
---

# List.Sort


Sorterar en lista med data enligt angivna villkor.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Sorterar en lista med data, `list`, enligt angivna valfria villkor. En valfri parameter, `comparisonCriteria`, kan anges som jämförelsevillkor. Följande värden kan användas:

-   Om du vill styra ordningen kan jämförelsevillkoret vara ett ordningsuppräkningsvärde. (`Order.Descending`, `Order.Ascending`).
-   Om du vill beräkna en nyckel som ska användas för sortering kan en funktion med 1 argument användas.
-   Om du både vill välja en nyckel och styra ordningen kan jämförelsevillkoret vara en lista som innehåller nyckeln och ordningen (`{each 1 / _, Order.Descending}`).
-   Om du vill ha full kontroll över jämförelsen kan en funktion med 2 argument användas (till exempel Value.Compare). Funktionen tillsänds två objekt från listan (valfria två objekt i valfri ordning). Funktionen bör returnera ett av följande värden:
    -   `-1`: Det första objektet är mindre än det andra.
    -   `0`: Objekten är likvärdiga.
    -   `1`: Det första objektet är större än det andra.


## Examples

### Example #1
Sortera listan \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Sortera listan \{2, 3, 1\} i fallande ordning.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Sortera listan \{2, 3, 1\} i fallande ordning med hjälp av Value.Compare-metoden.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
