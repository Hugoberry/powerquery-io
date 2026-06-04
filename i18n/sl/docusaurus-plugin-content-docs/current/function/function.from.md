---
title: Function.From
---

# Function.From


Ustvari funkcijo z določenim podpisom parametra poleg funkcije, ki vsebuje argument enega seznama.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Uporabi unarno funkcijo `function`, da ustvari novo funkcijo z vrsto `functionType`, ki sestavi seznam iz svojih argumentov in ga pošlje `function`.


## Examples

### Example #1
Pretvori"List.Sum"v funkcijo z dvema argumentoma, katere argumenti so sešteti.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Pretvori funkcijo z uporabo seznama v funkcijo z dvema argumentoma.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
