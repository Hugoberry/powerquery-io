---
title: Number.Round
---

# Number.Round


## Description

Tiek atgriezts noapaļots skaitlis. Varat norādīt ciparu skaitu un noapaļošanas metodi.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Atgriež noapaļošanas rezultātu <code>number</code> līdz tuvākajam skaitlim. Ja <code>number</code> ir nulle, <code>Number.Round</code> atgriež nulli.<br />      <br />      Pēc noklusējuma <code>number</code> tiek noapaļots līdz tuvākajam skaitlim, un saites tiek pārtrauktas, noapaļojot līdz tuvākajam pāra skaitlim (izmantojot noapaļošanu <code>RoundingMode.ToEven</code>, kas zināma arī kā "baņķiera noapaļošana").<br />      <br />      Tomēr šos noklusējumus var ignorēt, izmantojot turpmākos izvēles parametrus.      <ul>        <li><code>digits</code>: liek <code>number</code> būt noapaļotam līdz norādītajam ciparam aiz komata.</li>        <li><code>roundingMode</code>: ignorē noklusējuma sasaistīšanas procesu, <code>number</code> kad atrodas viduspunktā starp divām iespējamām noapaļotām vērtībām      (iespējamās vērtības skatiet <code>RoundingMode.Type</code>).</li>      </ul>


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
