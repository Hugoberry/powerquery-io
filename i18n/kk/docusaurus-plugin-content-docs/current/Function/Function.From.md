---
title: Function.From
---

# Function.From


## Description

Бір тізім аргументін алатын функцияның үстіне арнайы параметр қолтаңбасы бар функцияны жасайды


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

<code>function</code> унарлық функциясын жасайды және аргументтерден тізім жасайтын және оны <code>function</code> үшін беретін <code>functionType</code> түріндегі жаңа функция жасайды.


## Examples

### Example #1 
List.Sum функциясын аргументтері қосылатын екі аргументті функцияға түрлендіреді
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Тізімді алатын функцияны екі аргументті функцияға түрлендіреді
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
