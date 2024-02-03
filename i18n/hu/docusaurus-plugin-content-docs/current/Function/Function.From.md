---
title: Function.From
---

# Function.From


## Description

Létrehoz egy adott paraméter-aláírással rendelkező függvényt egy másik függvényen, amelyhez egyetlen listaargumentum tartozik


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Egy egyoperandusú függvényből (<code>function</code>) létrehoz egy <code>functionType</code> típusú új függvényt, amely listát készít az argumentumaiból, és továbbítja a(z) <code>function</code> felé.


## Examples

### Example #1 
Olyan kétargumentumos függvénnyé alakítja át a List.Sum-ot, amelynek az argumentumai összeadódnak
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Kétargumentumú függvénnyé alakít át egy listát használó függvényt
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
