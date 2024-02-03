---
title: Function.From
---

# Function.From


## Description

Vytvára funkciu s konkrétnym podpisom parametra nad funkciou, ktorá vezme jeden argument zoznamu


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Vezme unárnu funkciu <code>function</code> a vytvorí novú funkciu s typom <code>functionType</code>, ktorá konštruuje zoznam zo svojich argumentov a odovzdá ho do funkcie <code>function</code>.


## Examples

### Example #1 
Skonvertuje hodnotu List.Sum na funkciu s dvomi argumentmi, ktorej argumenty sa pridajú spolu
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Skonvertuje funkciu, ktorá prijíma zoznam, na funkciu s dvomi argumentami
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
