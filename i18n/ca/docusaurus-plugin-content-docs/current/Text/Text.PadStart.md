---
title: Text.PadStart
---

# Text.PadStart


## Description

Retorna text d&#39;una longitud especificada emplenant l&#39;inici del text donat.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Retorna un valor <code>text</code> emplenat fins a la longitud <code>count</code> inserint espais a l'inici del valor de text <code>text</code>.    Es pot utilitzar el caràcter opcional <code>character</code> per especificar el caràcter utilitzat per a l'emplenament. El caràcter d'emplenament per defecte és un espai.


## Examples

### Example #1 
Emplena l&#39;inici d&#39;un valor de text perquè tingui 10 caràcters de longitud.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Emplena l&#39;inici d&#39;un valor de text amb &#34;|&#34; perquè tingui 10 caràcters de longitud.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
