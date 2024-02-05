---
title: List.Sort
---

# List.Sort


## Description

Sorterar en lista med data enligt angivna villkor.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Sorterar en lista med data, <code>list</code>, enligt angivna valfria villkor.    En valfri parameter, <code>comparisonCriteria</code>, kan anges som jämförelsevillkor. Följande värden kan användas:    <ul>    <li> Om du vill styra ordningen kan jämförelsevillkoret vara ett ordningsuppräkningsvärde. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Om du vill beräkna en nyckel som ska användas för sortering kan en funktion med 1 argument användas. </li>    <li> Om du både vill välja en nyckel och styra ordningen kan jämförelsevillkoret vara en lista som innehåller nyckeln och ordningen (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Om du vill ha full kontroll över jämförelsen kan en funktion med 2 argument användas. Funktionen tillsänds två objekt från listan (valfria två objekt i valfri ordning).Funktionen bör returnera ett av följande värden:         <ul>            <li> <code>-1</code>: Det första objektet är mindre än det andra.</li>            <li> <code>0</code>: Objekten är likvärdiga.</li>            <li> <code>1</code>: Det första objektet är större än det andra.</li>        </ul>        Value.Compare är en metod som kan användas för att delegera den här logiken. </li>    </ul>.


## Examples

### Example #1 
Sortera listan \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Sortera listan \{2, 3, 1} i fallande ordning.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Sortera listan \{2, 3, 1} i fallande ordning med hjälp av Value.Compare-metoden.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
