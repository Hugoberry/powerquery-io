---
title: Function.From
---

# Function.From


## Description

Tek bir liste bağımsız değişkenini alan bir işlevin üstüne belirli bir parametre imzasına sahip bir işlev oluşturur


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Birli işlevi <code>function</code> alır ve bağımsız değişkenlerinden bir liste oluşturan <code>functionType</code> türünde yeni bir işlev oluşturur ve bunu <code>function</code> işlevine geçirir.


## Examples

### Example #1 
List.Sum&#39;ı bağımsız değişkenleri bir araya getirilen iki bağımsız değişkenli bir işleve dönüştürür
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Bir liste alan işlevi iki bağımsız değişkenli bir işleve dönüştürür
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
