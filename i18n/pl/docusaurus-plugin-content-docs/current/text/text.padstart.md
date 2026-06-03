---
title: Text.PadStart
---

# Text.PadStart


Zwraca tekst o określonej długości, dopełniając początek danego tekstu.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Zwraca wartość typu `text` o długości `count` powstałą w wyniku dopełnienia spacjami początku wartości tekstowej `text`. Za pomocą opcjonalnego parametru `character` można określić znak, który będzie używany do dopełniania. Domyślnie znakiem używanym do dopełniania jest spacja.


## Examples

### Example #1
Dopełnij początek wartości tekstowej, tak aby zawierała 10 znaków.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Dopełnij początek wartości tekstowej znakami „|”, tak aby zawierała 10 znaków.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
