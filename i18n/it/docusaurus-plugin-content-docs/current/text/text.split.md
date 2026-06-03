---
title: Text.Split
---

# Text.Split


Divide il testo in un elenco di valori di testo in base al delimitatore specificato.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Restituisce un elenco di valori di testo risultante dalla suddivisione del valore testo in base al delimitatore specificato .

-   `text`: valore testo da suddividere.
-   `separator`: delimitatore usato per suddividere il testo. Il delimitatore può essere un singolo carattere o una sequenza di caratteri. Se si utilizza una sequenza di caratteri, il testo viene suddiviso solo nelle istanze in cui si verifica la sequenza esatta.


## Examples

### Example #1
Creare un elenco dal valore di testo "Name|Address|PhoneNumber" delimitato da "|".
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Crea un elenco dal valore testo utilizzando una sequenza di caratteri.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
