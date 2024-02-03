---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Zwraca tekst o określonej długości, dopełniając koniec danego tekstu.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Zwraca wartość typu <code>text</code> o długości <code>count</code> powstałą w wyniku dopełnienia spacjami końca wartości tekstowej <code>text</code>.    Za pomocą opcjonalnego parametru <code>character</code> można określić znak, który będzie używany do dopełniania. Domyślnie znakiem używanym do dopełniania jest spacja.


## Examples

### Example #1 
Dopełnij koniec wartości tekstowej, tak aby zawierała 10 znaków.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Dopełnij koniec wartości tekstowej znakami „|”, tak aby zawierała 10 znaków.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
