---
title: List.FirstN
---

# List.FirstN


Vraća prvi skup stavki sa liste tako što navodi broj stavki koje treba vratiti ili kvalifikujući uslov.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

-   Ako se navede broj, vraća se najviše toliko stavki.
-   Ako se navede uslov, vraćaju se sve stavke koje inicijalno zadovoljavaju taj uslov. Ako neka stavka ne zadovolji uslov, kasnije stavke se ne uzimaju u obzir.


## Examples

### Example #1
Pronalaženje inicijalnih vrednosti sa liste \{3, 4, 5, -1, 7, 8, 2\} koje su veće od 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
