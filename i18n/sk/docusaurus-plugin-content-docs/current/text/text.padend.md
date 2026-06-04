---
title: Text.PadEnd
---

# Text.PadEnd


Vráti text so zadanou dĺžkou prostredníctvom vyplnenia konca daného textu.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Vráti hodnotu `text` vyplnenú k dĺžke `count` vložením medzier na koniec textovej hodnoty `text`. Na zadanie znaku, ktorý sa použije na vyplnenie, možno použiť voliteľný znak `character`. Predvoleným znakom výplne je medzera.


## Examples

### Example #1
Vyplňte koniec textovej hodnoty tak, aby obsahovala 10 znakov.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Vyplňte koniec textovej hodnoty znakom "|", aby obsahovala 10 znakov.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
