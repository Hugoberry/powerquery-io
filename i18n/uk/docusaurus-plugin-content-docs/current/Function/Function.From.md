---
title: Function.From
---

# Function.From


## Description

Створює функцію з певним підписом параметра на основі функції, яка приймає один аргумент-список.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

На основі унарної функції "<code>function</code>" створює нову функцію типу "<code>functionType</code>", що конструює список аргументів і передає його до функції "<code>function</code>".


## Examples

### Example #1 
Перетворює List.Sum на функцію з двома аргументами, що додаються.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Перетворює функцію, яка приймає список, на функцію з двома аргументами.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
