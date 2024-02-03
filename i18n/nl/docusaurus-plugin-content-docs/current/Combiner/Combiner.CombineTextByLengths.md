---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Retourneert een functie die een lijst met tekst combineert met behulp van de opgegeven lengten.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Retourneert een functie die een lijst met tekstwaarden combineert tot één tekstwaarde met behulp van de opgegeven lengten.


## Examples

### Example #1 
Een lijst met tekstwaarden combineren door het opgegeven aantal tekens uit elke invoerwaarde te extraheren.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Een lijst met tekstwaarden combineren door het opgegeven aantal tekens uit te pakken, nadat u het resultaat eerst vooraf hebt ingevuld met de sjabloontekst.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
