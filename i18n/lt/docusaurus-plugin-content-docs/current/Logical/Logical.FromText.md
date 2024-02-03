---
title: Logical.FromText
---

# Logical.FromText


## Description

Iš tekstinių reikšmių „true“ ir „false“ sukuriama loginė reikšmė.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Iš tekstinės reikšmės <code>text</code> – „true“ arba „false“ – sukuriama loginė reikšmė. Jei <code>text</code> yra kitokia eilutė, pateikiama išimtis. Tekstinėje reikšmėje <code>text</code> skiriamos didžiosios ir mažosios raidės.


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
