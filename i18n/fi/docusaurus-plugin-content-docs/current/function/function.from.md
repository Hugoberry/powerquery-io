---
title: Function.From
---

# Function.From


Luo tietyn parametriallekirjoituksen sisältävän funktion yksittäisen luetteloargumentin ottavan funktion päälle.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Ottaa yksiarvoisen funktion `function` ja luo uuden funktion, jonka tyyppi on `functionType` ja joka muodostaa luettelon argumenteistaan ja välittää sen kohteeseen `function`.


## Examples

### Example #1
Muuntaa List.Sum-kohteen kaksiargumenttiseksi funktioksi, jonka argumentit lisätään yhteen.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Muuntaa luettelon ottavan funktion kaksiargumenttiseksi funktioksi.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
