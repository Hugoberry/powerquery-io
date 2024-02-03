---
title: List.Alternate
---

# List.Alternate


## Description

Vraća listu koja se sastoji od svih elemenata pomaka sa liste koji imaju neparan broj.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Vraća listu koja se sastoji od svih elemenata pomaka sa liste koji imaju neparan broj. Naizmenično preuzima i preskače vrednosti sa liste <code>list</code> u zavisnosti od parametara.    <ul>    <li><code>count</code>: Navodi broj vrednosti koje se svaki put preskaču.</li>    <li><code>repeatInterval</code>: Opcionalni interval ponavljanja koji pokazuje broj vrednosti koje se dodaju između preskočenih vrednosti.</li>    <li><code>offset</code>: Opcionalni parametar pomaka koji počinje preskakanje vrednosti kod početnog pomaka.</li>    </ul>


## Examples

### Example #1 
Kreiranje liste od \{1..10} koja preskače prvi broj.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Kreiranje liste od \{1..10} koja preskače svaki drugi broj.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Kreiranje liste od \{1..10} koja počinje od 1 i preskače svaki drugi broj.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Kreiranje liste od \{1..10} koja počinje od 1, preskače jednu vrednost, zadržava dve vrednosti i tako dalje.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
