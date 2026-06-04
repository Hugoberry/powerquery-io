---
title: Number.Combinations
---

# Number.Combinations


Pateikiamas unikalių derinių skaičius.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Pateikiamas unikalių derinių iš elementų sąrašo skaičius, `setSize` su nurodytu derinio dydžiu, `combinationSize`.

-   `setSize`: sąrašo elementų skaičius.
-   `combinationSize`: elementų skaičius kiekviename derinyje.


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
