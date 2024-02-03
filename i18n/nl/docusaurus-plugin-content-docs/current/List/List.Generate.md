---
title: List.Generate
---

# List.Generate


## Description

Hiermee wordt een lijst met waarden gegenereerd.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Genereert een lijst met waarden met behulp van de opgegeven functies. De functie <code>initial</code> genereert een beginwaarde voor de kandidaat, die vervolgens wordt getest op <code>condition</code>.    Als de kandidaatwaarde wordt goedgekeurd, wordt deze geretourneerd als onderdeel van de resulterende lijst en de volgende kandidaatwaarde wordt gegenereerd door de zojuist goedgekeurde waarde door te geven aan <code>next</code>.    Als een kandidaatwaarde niet overeenkomt met <code>condition</code>, stopt het proces voor het genereren van de lijst.    Een optionele parameter, <code>selector</code>, kan ook worden opgegeven om de items in de resulterende lijst te transformeren.


## Examples

### Example #1 
Maak een lijst door te beginnen bij tien, herhaaldelijk met één te verlagen en ervoor te zorgen dat elk item groter is dan nul.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Een lijst genereren met records die x en y bevatten, waarbij x een waarde en y een lijst is. x moet kleiner dan 10 blijven en het aantal items in de lijst y voorstellen. Nadat de lijst is gegenereerd, alleen de x-waarden retourneren.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
