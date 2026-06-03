---
title: List.StandardDeviation
---

# List.StandardDeviation


Retourneert een steekproef op basis van de schatting van de standaarddeviatie.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Hiermee wordt een op een voorbeeld gebaseerde schatting geretourneerd van de standaarddeviatie van de waarden in de lijst, `numbersList`. Als `numbersList` een lijst met getallen is, wordt een getal geretourneerd. Er wordt een fout gegenereerd in een lege lijst of een lijst met items die niet van het type `nummer` zijn.


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
