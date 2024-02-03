---
title: List.Sum
---

# List.Sum


## Description

Pateikiama sąrašo elementų suma.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Pateikiama ne neapibrėžtų sąrašo reikšmių suma, <code>list</code>.  Jei sąraše nėra ne neapibrėžtų reikšmių, pateikiamas rezultatas yra lygus nuliui.


## Examples

### Example #1 
Raskite skaičių sumą sąraše &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
