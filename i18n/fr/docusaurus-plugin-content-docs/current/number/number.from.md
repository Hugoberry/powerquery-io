---
title: Number.From
---

# Number.From


Crée un nombre à partir de la valeur spécifiée.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retourne une valeur `number` du `value` spécifié. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr"). Si le `value` spécifié est `null`, `Number.From` retourne `null`. Si le `value` spécifié est `number`, `value` est retourné. Les valeurs des types suivants peuvent être converties en valeur `number` :

-   `text` : valeur `number` depuis la représentation de texte. Les formats de texte courants sont ("15", "3,423.10", "5.0E-10"). Référez-vous à `Number.FromText` pour plus de détails.
-   `logical` : 1 pour `true`, 0 pour `false`.
-   `datetime` : nombre à virgule flottante double précision qui contient une date OLE Automation équivalente.
-   `datetimezone` : nombre à virgule flottante double précision qui contient une date OLE Automation équivalente à la date et à l'heure locale de `value`.
-   `date` : nombre à virgule flottante double précision qui contient une date OLE Automation équivalente.
-   `time` : exprimé en fractions de jours.
-   `duration` : exprimé en fractions de jours et en jours complets.

Si `value` est d'un autre type, une erreur est retournée.


## Examples

### Example #1
Obtient la valeur `number` de `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obtient la valeur `number` de `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Obtenez la valeur `number` de `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
