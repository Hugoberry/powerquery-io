---
title: Json.FromValue
---

# Json.FromValue


Genera una rappresentazione JSON di un valore specificato.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Produce una rappresentazione JSON di un valore specificato `value` con una codifica di testo specificata da `encoding`. Se si omette `encoding`, viene usata la codifica UTF8. I valori sono rappresentati come indicato di seguito:

-   I valori logici, di testo e null sono rappresentati come i tipi JSON corrispondenti
-   I numeri sono rappresentati come numeri in JSON, ad eccezione di `#infinity`, `-#infinity` e `#nan` che vengono convertiti in null
-   Gli elenchi sono rappresentati come array JSON
-   I record sono rappresentati come oggetti JSON
-   Le tabelle sono rappresentate come array di oggetti
-   Date, ore, valori di data/ora, fusi orari e durate sono rappresentati come testo ISO-8601
-   I valori binari sono rappresentati come testo con codifica Base 64
-   I tipi e le funzioni producono un errore


## Examples

### Example #1
Converte un valore complesso in JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
