---
title: Text.PadStart
---

# Text.PadStart


## Description

Vráti text so zadanou dĺžkou prostredníctvom vyplnenia začiatku daného textu.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Vráti hodnotu <code>text</code> vyplnenú k dĺžke <code>count</code> vložením medzier na začiatok textovej hodnoty <code>text</code>.    Na zadanie znaku, ktorý sa použije na vyplnenie, možno použiť voliteľný znak <code>character</code>. Predvoleným znakom výplne je medzera.


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
Vyplňte začiatok textovej hodnoty znakom &#34;|&#34;, aby obsahovala 10 znakov.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
