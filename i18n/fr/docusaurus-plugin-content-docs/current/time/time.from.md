---
title: Time.From
---

# Time.From


Crée une heure à partir de la valeur spécifiée.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Retourne une valeur `time` du `value` spécifié. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr"). Si le `value` spécifié est `null`, `Time.From` retourne `null`. Si le `value` spécifié est `time`, `value` est retourné. Les valeurs des types suivants peuvent être converties en valeur `time` :

-   `text` : valeur `time` à partir de la représentation de texte. Référez-vous à `Time.FromText` pour plus de détails.
-   `datetime` : composant d'heure de `value`.
-   `datetimezone` : composant d'heure du datetime local équivalent à `value`.
-   `number` : `time` équivalente au nombre de jours entiers ou de fractions de jours exprimés par `value`. Si `value` est négatif, ou supérieur ou égale à 1, une erreur est retournée.

Si `value` est d'un autre type, une erreur est retournée.


## Examples

### Example #1
Convertit `0.7575` en une valeur `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Convertit `#datetime(1899, 12, 30, 06, 45, 12)` en une valeur `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
