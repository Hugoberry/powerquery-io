---
title: Number.FromText
---

# Number.FromText


Crea numeri dai formati di testo comuni ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Restituisce un valore `number` dal valore di testo `text` specificato.

-   `text`: rappresentazione testuale di un valore numerico. La rappresentazione deve essere in un formato numerico comune, ad esempio "15", "3.423,10" o "5.0E-10".
-   `culture`: impostazione cultura facoltativa che controlla il modo in cui `text` viene interpretato, ad esempio "it-IT".


## Examples

### Example #1
Ottenere il valore numerico di `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Ottenere il valore numerico di `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
