---
title: Number.Round
---

# Number.Round


Tiek atgriezts noapaļots skaitlis. Varat norādīt ciparu skaitu un noapaļošanas metodi.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Atgriež noapaļošanas rezultātu `number` līdz tuvākajam skaitlim. Ja `number` ir nulle, `Number.Round` atgriež nulli.  
  
Pēc noklusējuma `number` tiek noapaļots līdz tuvākajam skaitlim, un saites tiek pārtrauktas, noapaļojot līdz tuvākajam pāra skaitlim (izmantojot noapaļošanu `RoundingMode.ToEven`, kas zināma arī kā "baņķiera noapaļošana").  
  
Tomēr šos noklusējumus var ignorēt, izmantojot turpmākos izvēles parametrus.

-   `digits`: liek `number` būt noapaļotam līdz norādītajam ciparam aiz komata.
-   `roundingMode`: ignorē noklusējuma sasaistīšanas procesu, `number` kad atrodas viduspunktā starp divām iespējamām noapaļotām vērtībām (iespējamās vērtības skatiet `RoundingMode.Type`).


## Examples

### Example #1
Noapaļojiet skaitli 1,234 līdz tuvākajam veselajam skaitlim.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Noapaļojiet skaitli 1,56 līdz tuvākajam veselajam skaitlim.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Noapaļojiet skaitli 1,2345 līdz skaitlim, kurā ir divi cipari aiz komata.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Noapaļojiet skaitli 1,2345 līdz skaitlim, kurā ir trīs cipari aiz komata (noapaļošana uz augšu).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Noapaļojiet skaitli 1,2345 līdz skaitlim, kurā ir trīs cipari aiz komata (noapaļošana uz leju).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
