---
title: Logical.FromText
---

# Logical.FromText


Iš tekstinių reikšmių „true“ ir „false“ sukuriama loginė reikšmė.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Iš tekstinės reikšmės `text` – „true“ arba „false“ – sukuriama loginė reikšmė. Jei `text` yra kita eilutė, pateikiama klaida. Tekstinėje reikšmėje `text` skiriamos didžiosios ir mažosios raidės.


## Examples

### Example #1
Sukurkite loginę reikšmę iš teksto eilutės „true“.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Sukurkite loginę reikšmę iš teksto eilutės „a“.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
