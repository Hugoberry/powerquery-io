---
title: Function.From
---

# Function.From


## Description

Vytváří funkci s konkrétním podpisem parametru nad funkcí, která přijímá jeden argument typu seznam


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Vezme unární funkci <code>function</code> a vytvoří novou funkci s typem <code>functionType</code>, která sestaví seznam ze svých argumentů a předá ho do funkce <code>function</code>.


## Examples

### Example #1 
Převede List.Sum na funkci se dvěma argumenty, jejíž argumenty se dají dohromady
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Převede funkci, která přijímá jako vstup seznam, na funkci se dvěma argumenty
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
