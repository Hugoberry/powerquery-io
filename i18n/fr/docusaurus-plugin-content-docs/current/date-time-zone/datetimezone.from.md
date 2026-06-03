---
title: DateTimeZone.From
---

# DateTimeZone.From


Crée un datetimezone à partir de la valeur spécifiée.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Crée un `datetimezone` à partir de la valeur donnée.

-   `value` : La valeur utilisée pour créer un `datetimezone`.
-   `culture` : (Facultatif) La culture à utiliser lors de la transformation de la valeur (par exemple, « en-US »).

Les valeurs des types suivants peuvent être converties en une valeur `datetimezone` :

-   `text`: Renvoie une valeur `datetimezone` à partir d'une représentation textuelle. Reportez-vous à `DateTimeZone.FromText` pour plus de détails.
-   `date`: Renvoie un `datetimezone` avec `value` comme composant de date, `12:00:00 AM` comme composant d'heure et le décalage correspondant au fuseau horaire local.
-   `datetime`: Renvoie un `datetimezone` avec `value` comme datetime et le décalage correspondant au fuseau horaire local.
-   `datetimezone`: Renvoie `value`.
-   `time`: Renvoie un `datetimezone` avec l'équivalent de date de la date OLE Automation de `0` comme composant de date, `value` comme composant d'heure et le décalage correspondant au fuseau horaire local. La date OLE Automation est un nombre à virgule flottante dont la composante intégrale est le nombre de jours avant ou après minuit le 30 décembre 1899, et dont la composante fractionnaire représente l'heure de ce jour divisée par 24. Par exemple, minuit le 31 décembre 1899 est représenté par 1,0 ; 6 h le 1er janvier 1900 est représenté par 2,25 ; minuit le 29 décembre 1899 est représenté par -1,0 ; et 6 h le 29 décembre 1899 est représenté par -1,25. La valeur de base est minuit le 30 décembre 1899. La valeur minimale est minuit le 1er janvier 0100. La valeur maximale est le dernier instant du 31 décembre 9999.
-   `number`: Renvoie un `datetimezone` avec l'équivalent datetime de la date OLE Automation exprimée par `value` et le décalage correspondant au fuseau horaire local.
-   `null`: Renvoie `null`.

Si `value` est un autre type, une erreur est renvoyée.  
  
La valeur du décalage correspondant au fuseau horaire local est différente lors de l'exécution de cette fonction localement par rapport à son exécution en ligne. Lorsqu'il est exécuté localement, le fuseau horaire local est renvoyé. Lorsqu'il est exécuté en ligne, le fuseau horaire UTC (+00:00) est renvoyé.


## Examples

### Example #1
Convertissez la représentation textuelle d'une date, d'une heure et d'un fuseau horaire en une valeur `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Convertissez la représentation textuelle de la date, de l'heure et du fuseau horaire en portugais brésilien en une valeur `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Convertissez un nombre représentant le 1er janvier 2025 à 12 h en une valeur `datetimezone`. Le fuseau horaire dans le résultat dépend du fait que l'exemple est exécuté localement ou en ligne.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
