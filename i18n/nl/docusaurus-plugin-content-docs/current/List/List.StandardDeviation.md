---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Retourneert een steekproef op basis van de schatting van de standaarddeviatie.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Hiermee wordt een op een voorbeeld gebaseerde schatting geretourneerd van de standaarddeviatie van de waarden in de lijst, <code>numbersList</code>. Als <code>numbersList</code> een lijst met getallen is, wordt een getal geretourneerd. Een uitzondering wordt geretourneerd voor een lege lijst of een lijst met items die niet van het type <code>number</code> is.


## Examples

### Example #1 
De standaarddeviatie van de getallen 1 t/m 5 zoeken.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
