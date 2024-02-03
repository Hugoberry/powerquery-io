---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Pateikiama funkcija, kuri sujungia teksto sąrašą naudodama nurodytus ilgius.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Pateikiama funkcija, kuri sujungia teksto reikšmių sąrašą į vieną teksto reikšmę naudodama nurodytus ilgius.


## Examples

### Example #1 
Sujunkite tekstinių reikšmių sąrašą išskleisdami nurodytus kiekvienos įvesties reikšmės simbolių skaičius.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Sujunkite tekstinių reikšmių sąrašą išskleisdami nurodytus simbolių skaičius, prieš tai iš anksto rezultatą užpildę šablono tekstu.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
