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

Genera una rappresentazione JSON di un valore specificato <code>value</code> con una codifica di testo specificata da <code>encoding</code>. Se si omette <code>encoding</code>, verrà usata la codifica UTF8. I valori sono rappresentati come segue:<br /> <ul>        <li>I valori logici, di testo e Null sono rappresentati come i tipi JSON corrispondenti</li>        <li>I numeri sono rappresentati come numeri in JSON, ad eccezione di <code>#infinity</code>, <code>-#infinity</code> e <code>#nan</code> che vengono convertiti in valori Null</li>        <li>Gli elenchi sono rappresentati come matrici JSON</li>        <li>I record sono rappresentati come oggetti JSON</li>        <li>Le tabelle sono rappresentate come una matrice di oggetti</li>        <li>Date, ore, valori di data/ora, fusi orari e durate sono rappresentati come testo ISO-8601</li>        <li>I valori binari sono rappresentati come testo con codifica Base 64</li>        <li>I tipi e le funzioni restituiscono un errore</li> </ul>    


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
