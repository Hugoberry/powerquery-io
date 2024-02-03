---
title: Function.From
---

# Function.From


## Description

Luo tietyn parametriallekirjoituksen sisältävän funktion yksittäisen luetteloargumentin ottavan funktion päälle


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Ottaa yksiarvoisen funktion <code>function</code> ja luo uuden funktion, jonka tyyppi on <code>functionType</code> ja joka muodostaa luettelon argumenteistaan ja välittää sen kohteeseen <code>function</code>.


## Examples

### Example #1 
Muuntaa List.Sum-kohteen kaksiargumenttiseksi funktioksi, jonka argumentit lisätään yhteen
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Muuntaa luettelon ottavan funktion kaksiargumenttiseksi funktioksi
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
