---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Împarte două numere şi returnează partea de număr întreg din rezultat.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Returnează partea de număr întreg din rezultatul obținut prin împărțirea unui număr, `number1`, la alt număr, `number2`. Dacă `number1` sau `number2` sunt nule, `Number.IntegerDivide` returnează nul.

-   `number1`: deîmpărțitul.
-   `number2`: împărțitorul.


## Examples

### Example #1
Împărţiţi 6 la 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Împărţiţi 8,3 la 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
