---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Împarte două numere şi returnează partea de număr întreg din rezultat.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Returnează partea de număr întreg din rezultatul obținut prin împărțirea unui număr, <code>number1</code>, la alt număr, <code>number2</code>.     Dacă <code>number1</code> sau <code>number2</code> sunt nule, <code>Number.IntegerDivide</code> returnează nul.      <ul>        <li><code>number1</code>: deîmpărțitul.</li>        <li><code>number2</code>: împărțitorul.</li>      </ul>


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
