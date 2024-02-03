---
title: Number.Combinations
---

# Number.Combinations


## Description

Pateikiamas unikalių derinių skaičius.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Pateikiamas unikalių derinių iš elementų sąrašo skaičius, <code>setSize</code> su nurodytu derinio dydžiu, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: sąrašo elementų skaičius.</li>    <li><code>combinationSize</code>: elementų skaičius kiekviename derinyje.</li></ul>


## Examples

### Example #1 
Raskite skaičių derinių iš 5 elementų, kai kiekvienas derinys yra 3-jų grupė.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
