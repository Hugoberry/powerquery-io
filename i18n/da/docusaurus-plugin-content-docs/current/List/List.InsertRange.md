---
title: List.InsertRange
---

# List.InsertRange


## Description

Indsætter værdier på en liste ved det angivne indeks.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Returnerer en ny liste, der er oprettet ved at indsætte værdierne fra <code>values</code> i <code>list</code> ved <code>index</code>. Den første position på listen er ved indeks 0.      <ul>        <li><code>list</code>: Den destinationsliste, hvor værdier skal indsættes.</li>        <li><code>index</code>: Indeks for destinationslisten (<code>list</code>), hvor værdierne skal indsættes. Den første position på listen er ved indeks 0.</li>        <li><code>values</code>: Den liste over værdier, som skal indsættes i <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Indsæt listen (\{3, 4}) i destinationslisten (\{1, 2, 5}) ved indeks 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
Indsæt en liste med en indlejret liste (\{1, \{1.1, 1.2}}) i en destinationsliste (\{2, 3, 4}) ved indeks 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
