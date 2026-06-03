---
title: DateTime.From
---

# DateTime.From


Crée un datetime à partir de la valeur spécifiée.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Retourne une valeur `datetime` du `value` spécifié. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr"). Si le `value` spécifié est `null`, `DateTime.From` retourne `null`. Si le `value` spécifié est `datetime`, `value` est retourné. Les valeurs des types suivants peuvent être converties en valeur `datetime` :

-   `text` : valeur `datetime` depuis la représentation de texte. Référez-vous à `DateTime.FromText` pour plus de détails.
-   `date` : `datetime` avec `value` comme composant de date et `12:00:00 AM` comme composant d'heure.
-   `datetimezone` : équivalent `datetime` local de `value`.
-   `time` : `datetime` avec l'équivalent de date de la date OLE Automation de `0` comme composant de date et `value` comme composant d'heure.
-   `number` : équivalent `datetime` de la date OLE Automation exprimée par `value`.

Si `value` est d'un autre type, une erreur est retournée.


## Examples

### Example #1
Convertit `#time(06, 45, 12)` en une valeur `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Convertit `#date(1975, 4, 4)` en une valeur `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
