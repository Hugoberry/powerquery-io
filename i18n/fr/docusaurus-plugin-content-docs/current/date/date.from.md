---
title: Date.From
---

# Date.From


Crée une date à partir de la valeur spécifiée.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Renvoie une valeur de date à partir de la valeur donnée.

-   `value` : La valeur à convertir en date. Si la valeur fournie est `null`, cette fonction renvoie `null`. Si la valeur fournie est `date`, `value` est renvoyée. Les valeurs des types suivants peuvent être converties en une valeur de type `date` :
    -   `text` : Une valeur `date` issue d'une représentation textuelle. Reportez-vous à `Date.FromText` pour plus de détails.
    -   `datetime` : La composante date de la `value`.
    -   `datetimezone` : La composante date de l'équivalent date-heure local de `value`.
    -   `number` : La composante date de l'équivalent date-heure d'un nombre à virgule flottante dont la partie entière correspond au nombre de jours précédant ou suivant minuit le 30 décembre 1899, et dont la partie fractionnaire représente l'heure de cette journée divisée par 24. Par exemple, minuit le 31 décembre 1899 est représenté par 1,0 ; 6 h 00 le 1er janvier 1900 est représenté par 2,25 ; minuit le 29 décembre 1899 est représenté par -1,0 ; et 6 h 00 le 29 décembre 1899 est représenté par -1,25. La valeur de référence est minuit le 30 décembre 1899. La valeur minimale est minuit le 1er janvier 0100. La valeur maximale correspond au dernier instant du 31 décembre 9999.
    -   Si `value` est d'un autre type, une erreur est renvoyée.
-   `culture` : La culture de la valeur donnée (par exemple, « en-US »).


## Examples

### Example #1
Convertissez la date et l’heure spécifiées en valeur de date.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Convertissez le nombre spécifié en valeur de date.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Convertir les dates de texte allemand de la colonne Date de publication en valeurs de date.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
