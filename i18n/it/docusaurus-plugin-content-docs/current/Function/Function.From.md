---
title: Function.From
---

# Function.From


## Description

Crea una funzione con una firma di parametro specifica su una funzione che accetta un singolo argomento di elenco


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Accetta una funzione unaria <code>function</code> e crea una nuova funzione con tipo <code>functionType</code> che costruisce un elenco dagli argomenti e la passa a <code>function</code>.


## Examples

### Example #1 
Converte List.Sum in una funzione a due argomenti i cui argomenti vengono aggiunti insieme
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Converte una funzione che accetta un elenco in una funzione a due argomenti
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
