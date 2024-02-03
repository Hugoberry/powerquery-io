---
title: Function.From
---

# Function.From


## Description

Pravi funkciju sa određenim potpisom parametra iznad funkcije koja koristi jedan argument liste


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Koristi funkciju unary <code>function</code> i pravi novu funkciju sa tipom <code>functionType</code> koji pravi listu od svojih argumenata i prosleđuje je na <code>function</code>.


## Examples

### Example #1 
Konvertuje List.Sum u funkciju sa dva argumenta čiji argumenti se zbrajaju
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Konvertuje funkciju tako što listu pretvara u funkciju sa dva argumenta
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
