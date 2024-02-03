---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Tiek atgriezts teksts norādītajā garumā, teksta beigās pievienojot papildinājumu.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Atgriež <code>text</code> vērtību ar papildinājumu līdz garumam <code>count</code>, ievietojot atstarpes teksta vērtības <code>text</code> beigās.    Var izmantot neobligātu rakstzīmi <code>character</code>, lai norādītu papildinājumam izmantoto rakstzīmi. Noklusējuma bloka rakstzīme ir atstarpe.


## Examples

### Example #1 
Pievienojiet papildinājumu teksta vērtības beigās, lai tās garums būtu 10 rakstzīmes.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Pievienojiet papildinājumu | teksta vērtības beigās, lai tās garums būtu 10 rakstzīmes.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
