---
title: Number.ToText
---

# Number.ToText


## Description

Convertit le nombre donné en texte.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Convertit la valeur numérique <code>number</code> en une valeur de texte selon le format spécifié par <code>format</code>.<br />    <br />    Le format est une valeur de texte indiquant comment le nombre doit être converti. Pour plus d’informations sur les valeurs de format prises en charge, accédez à https://go.microsoft.com/fwlink/?linkid=2241210 et https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, " fr-FR ") pour contrôler le comportement dépendant de la culture de <code>format</code>.


## Examples

### Example #1 
Convertir un nombre en texte sans spécifier de format.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Convertissez un nombre au format exponentiel.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Convertir un nombre au format de pourcentage avec une seule décimale.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
