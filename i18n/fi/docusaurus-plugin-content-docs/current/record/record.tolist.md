---
title: Record.ToList
---

# Record.ToList


Palauttaa luettelon arvoja, joka sisältää syötetietueen kenttien arvot.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Palauttaa luettelon arvoja, joka sisältää kenttien arvot syötteestä `record`.


## Examples

### Example #1
Poimi kenttien nimet tietueesta.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
