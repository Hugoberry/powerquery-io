---
title: Function.From
---

# Function.From


Создает функцию с определенной сигнатурой параметров на базе функции, принимающей один аргумент списка.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Принимает унарную функцию <code>function</code> и создает новую функцию с типом <code>functionType</code>, которая составляет из ее аргументов список и передает его <code>function</code>.


## Examples

### Example #1 
Преобразует List.Sum в функцию с двумя аргументами, которые складываются друг с другом.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Преобразует функцию, принимающую список, в функцию с двумя аргументами.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
