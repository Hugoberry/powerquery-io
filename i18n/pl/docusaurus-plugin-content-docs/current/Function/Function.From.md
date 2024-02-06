---
title: Function.From
---

# Function.From


Tworzy funkcję z podpisem określonego parametru na górze funkcji, która przyjmuje argument pojedynczej listy


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Przyjmuje funkcję jednoargumentową <code>function</code> i tworzy nową funkcję z typem <code>functionType</code>, który tworzy listę z jej argumentów i przekazuje ją do elementu <code>function</code>.


## Examples

### Example #1 
Konwertuje funkcję List.Sum na funkcję dwuargumentową, której argumenty są sumowane
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Konwertuje funkcję przyjmującą listę na funkcję dwuargumentową
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
