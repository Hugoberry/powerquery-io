---
title: Text.PadStart
---

# Text.PadStart


Retorna text d'una longitud especificada emplenant l'inici del text donat.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Retorna un valor `text` emplenat fins a la longitud `count` inserint espais a l'inici del valor de text `text`. Es pot utilitzar el caràcter opcional `character` per especificar el caràcter utilitzat per a l'emplenament. El caràcter d'emplenament per defecte és un espai.


## Examples

### Example #1
Emplena l'inici d'un valor de text perquè tingui 10 caràcters de longitud.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Emplena l'inici d'un valor de text amb "|" perquè tingui 10 caràcters de longitud.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
