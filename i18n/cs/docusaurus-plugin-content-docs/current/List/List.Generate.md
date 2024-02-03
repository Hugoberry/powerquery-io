---
title: List.Generate
---

# List.Generate


## Description

Vygeneruje seznam hodnot.


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

Vygeneruje seznam hodnot pomocí zadaných funkcí. Funkce <code>initial</code> vygeneruje počáteční hodnotu kandidáta, která se pak testuje na <code>condition</code>. Pokud je kandidátská hodnota schválená, vrátí se jako součást výsledného seznamu a další kandidátská hodnota se vygeneruje předáním nově schválené hodnoty do <code>next</code>. Jakmile se kandidátské hodnotě nepodaří spárovat <code>condition</code>, proces generování seznamu se zastaví. K transformaci položek ve výsledném seznamu lze zadat také volitelný parametr <code>selector</code>.


## Examples

### Example #1 
Vytvořte seznam tak, že začnete od deseti, opakovaně snižujte o jednu položku a dbejte, aby každá položka byla větší než nula.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Vygenerovat seznam záznamů obsahujících x a y, kde x je hodnota a y seznam. x by mělo zůstat nižší než 10 a představovat počet položek seznamu y. Po vygenerování seznamu vrátit jen hodnoty x.
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
