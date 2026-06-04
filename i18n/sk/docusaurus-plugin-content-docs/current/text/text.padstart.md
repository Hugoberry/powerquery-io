---
title: Text.PadStart
---

# Text.PadStart


Vráti text so zadanou dĺžkou prostredníctvom vyplnenia začiatku daného textu.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Vráti hodnotu `text` vyplnenú k dĺžke `count` vložením medzier na začiatok textovej hodnoty `text`. Na zadanie znaku, ktorý sa použije na vyplnenie, možno použiť voliteľný znak `character`. Predvoleným znakom výplne je medzera.


## Examples

### Example #1
Vyplňte začiatok textovej hodnoty tak, aby obsahovala 10 znakov.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Vyplňte začiatok textovej hodnoty znakom "|", aby obsahovala 10 znakov.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
