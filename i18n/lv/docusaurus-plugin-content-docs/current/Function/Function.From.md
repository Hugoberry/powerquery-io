---
title: Function.From
---

# Function.From


## Description

Papildus funkcijai, kas izmanto viena saraksta argumentu, izveido funkciju ar īpašu parametra parakstu


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Izmantojot unāro funkciju <code>function</code>, izveido jaunu <code>functionType</code> tipa funkciju, kura izveido sarakstu no tās argumentiem un nodod to <code>function</code>.


## Examples

### Example #1 
Pārvērš List.Sum divu argumentu funkcijā, kuras argumenti ir saskaitīti
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Pārvērš funkciju, sadalot sarakstu divu argumentu funkcijā
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
